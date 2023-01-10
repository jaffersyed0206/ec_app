"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./tokens/functions");
const mealsApi_1 = __importDefault(require("./apps/mealsApi"));
const app = (0, express_1.default)();
app.get('/token/:email', (req, res) => {
    const { email } = req.params;
    res.json({
        jwt: (0, functions_1.generateToken)(email)
    });
});
app.use('/meals', mealsApi_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
