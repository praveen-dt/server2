import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const agentSchema = new Schema({
    agent_name: String,
    login_name: { type: String, unique: true },
    agentpwd: String,
    phone: Number,
    real_name: String,
    level: Number,
    balance: Number,
});

// Hash the password before saving
agentSchema.pre('save', async function(next) {
    if (this.isModified('agentpwd')) {
        this.agentpwd = await bcrypt.hash(this.agentpwd, 10);
    }
    next();
});

const Agent = model('Agent', agentSchema);
export default Agent;