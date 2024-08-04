import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import svgCaptcha from 'svg-captcha';
import path from 'path';
import { fileURLToPath } from 'url'; // Ensure this is at the top
import cookieParser from 'cookie-parser';

import Agent from './model/Agent.js';

dotenv.config();

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080', // Replace with your frontend URL
    credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY, // Replace with your actual secret key
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
    }),
    cookie: { secure: false } // Set secure: true in production with HTTPS
}));

// Serve static files from the 'public' directory under the '/assets' path
//app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/static/css', express.static(path.join(__dirname, 'public/static/css')));
app.use('/static/js', express.static(path.join(__dirname, 'public/static/js')));
app.use('/static/img', express.static(path.join(__dirname, 'public/static/img')));
app.use('/static/fonts', express.static(path.join(__dirname, 'public/static/fonts')));

// Route for serving the login page
app.get(['/', '/login'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Middleware to log session
app.use((req, res, next) => {
    console.log('Session ID:', req.sessionID); // Log the session ID
    console.log('Session:', req.session); // Log the entire session object
    next();
});

// CAPTCHA endpoint
app.get('/api/agent/captcha', (req, res) => {
    const t = req.query.t;
    if (!t) {
        return res.status(400).send('Missing t value');
    }

    const captcha = svgCaptcha.create({
        size: 4, // Set the length of the captcha to 4
        ignoreChars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', // Ignore alphabet characters
        noise: 2, // Number of noise lines
        color: true, // Whether to add color to the text
        background: '#cc9966' // Background color
    });
    req.session.captchas = req.session.captchas || {};
    req.session.captchas[t] = captcha.text; // Store the CAPTCHA text with the t value
    console.log("Generated CAPTCHA:", captcha.text); // Debug: Log the generated CAPTCHA text

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(captcha.data);
});

// Register a new agent
app.post('/api/agents/register', async(req, res) => {
    try {
        const { login_name, agentpwd, agent_name, phone, real_name, level, balance } = req.body;

        // Check for existing login name before creating a new agent
        const existingAgent = await Agent.findOne({ login_name });
        if (existingAgent) {
            console.log("Login name already exists:", login_name); // Debug: Log the existing login name
            return res.status(400).json({ message: "Login name already exists." });
        }

        const agent = new Agent({ login_name, agentpwd, agent_name, phone, real_name, level, balance });
        await agent.save();
        console.log("Registered agent with login_name:", login_name); // Debug: Log the login name
        res.status(201).json({ message: "Agent registered successfully", id: agent._id });
    } catch (error) {
        console.error("Error registering agent:", error.message); // Log any registration errors
        res.status(500).json({ message: error.message });
    }
});

// Login agent
app.post('/api/agent/agentLogin', async(req, res) => {
    console.log("Received Payload:", req.body);

    const { agent_name, login_name, agent_pwd, agent_code, t } = req.body;

    const sessionCaptchas = req.session.captchas || {};

    console.log("Session CAPTCHAs (at login):", sessionCaptchas);
    console.log("Provided CAPTCHA:", agent_code);
    console.log("Provided t value:", t);

    // Use login_name if provided, otherwise fall back to agent_name for backward compatibility
    const loginName = login_name || agent_name;

    if (!sessionCaptchas[t] || agent_code !== sessionCaptchas[t]) {
        console.log('Invalid CAPTCHA');
        return res.status(400).json({ code: 400, message: 'Invalid CAPTCHA' });
    }

    try {
        console.log("Attempting to find agent:", loginName);
        const agent = await Agent.findOne({ login_name: loginName });

        if (!agent) {
            console.log("No agent found for login_name:", loginName);
            return res.status(401).json({ code: 401, message: "Login failed, user not found." });
        }

        console.log("Agent found, comparing password for:", agent.login_name);
        console.log("Stored hash:", agent.agentpwd);
        console.log("Password provided by user:", agent_pwd);

        const isMatch = await bcrypt.compare(agent_pwd, agent.agentpwd);
        console.log("Password match result:", isMatch);

        if (!isMatch) {
            console.log("Password comparison failed for:", loginName);
            return res.status(401).json({ code: 401, message: "Invalid credentials" });
        }

        const token = jwt.sign({ agent_id: agent._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Update last login details
        agent.last_login_time = new Date();
        agent.last_login_ip = req.ip;
        agent.login_times += 1; // Increment login times
        await agent.save();

        const response = {
            code: 200,
            msg: "success",
            data: {
                agent_id: agent._id,
                agent_name: agent.agent_name,
                login_name: agent.login_name,
                phone: agent.phone ? agent.phone.toString() : null,
                real_name: agent.real_name,
                role_level: agent.level,
                last_login_time: agent.last_login_time,
                last_logon_time: agent.last_logon_time,
                last_login_ip: agent.last_login_ip,
                last_logon_ip: agent.last_logon_ip,
                login_times: agent.login_times,
                recharge_permission: agent.recharge_permission,
                redeem_permission: agent.redeem_permission,
                ragents: agent.ragents,
                is_test: agent.is_test,
                is_authorised: agent.is_authorised,
                secret_key: agent.secret_key,
                expires_time: agent.expires_time,
                token: token,
                role: agent.role
            }
        };
        res.cookie('token', token, { httpOnly: true });
        res.json(response);
    } catch (error) {
        console.error("Error during login process:", error.message);
        res.status(500).json({ code: 500, message: error.message });
    }
});

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// A protected route to check balance
app.post('/api/agent/balance', authenticateToken, async(req, res) => {
    try {
        const agent = await Agent.findById(req.user.agent_id);
        if (!agent) {
            return res.status(404).json({ message: "Agent not found" });
        }
        res.json({ balance: agent.balance });
    } catch (error) {
        console.error("Error fetching balance:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// A protected route to update balance
app.put('/api/agents/balance', authenticateToken, async(req, res) => {
    try {
        const { balance } = req.body;
        const agent = await Agent.findById(req.user.agent_id);
        if (!agent) {
            return res.status(404).json({ message: "Agent not found" });
        }
        agent.balance = balance;
        await agent.save();
        res.json({ message: "Balance updated successfully", balance: agent.balance });
    } catch (error) {
        console.error("Error updating balance:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// Serve HomeDetail.html
app.get('/HomeDetail', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HomeDetail.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});