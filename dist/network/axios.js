"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealsDb = void 0;
const axios_1 = __importDefault(require("axios"));
exports.mealsDb = axios_1.default.create({
    baseURL: "https://www.themealdb.com/api/",
});
