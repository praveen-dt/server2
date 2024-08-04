import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const { Schema, model } = mongoose;

const agentSchema = new Schema({
    agent_id: { type: Number, unique: true },
    agent_name: { type: String, required: true },
    login_name: { type: String, unique: true, required: true },
    agentpwd: { type: String, required: true },
    phone: { type: String, default: null },
    real_name: { type: String, default: null },
    role_level: { type: Number, default: 4 },
    last_login_time: { type: Date, default: Date.now },
    last_logon_time: { type: Date, default: Date.now },
    last_login_ip: { type: String, default: null },
    last_logon_ip: { type: String, default: null },
    login_times: { type: Number, default: 0 },
    recharge_permission: { type: Number, default: 1 },
    redeem_permission: { type: Number, default: 1 },
    ragents: { type: String, default: "24132,41265,41263,1,0" },
    is_test: { type: Number, default: 0 },
    is_authorised: { type: Number, default: 0 },
    secret_key: { type: String, default: uuidv4 },
    expires_time: { type: Date, default: () => new Date(Date.now() + 60 * 60 * 1000) },
    token: { type: String, default: null },
    role: { type: String, default: "SUBDISTRIBUTOR" },
    balance: { type: Number }
});

// Hash the password before saving
agentSchema.pre('save', async function(next) {
    if (this.isModified('agentpwd')) {
        this.agentpwd = await bcrypt.hash(this.agentpwd, 10);
    }
    next();
});

// Increment agent_id automatically
agentSchema.plugin(AutoIncrement, { inc_field: 'agent_id' });

const Agent = model('Agent', agentSchema);
export default Agent;