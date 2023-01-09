"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (email) => {
    const data = { email };
    return jsonwebtoken_1.default.sign(data, "5984b59e-8fc2-11ed-a1eb-0242ac120002", { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, "5984b59e-8fc2-11ed-a1eb-0242ac120002", (error, decoded) => {
            if (error) {
                reject(error);
            }
            resolve(decoded);
        });
    });
};
exports.verifyToken = verifyToken;
