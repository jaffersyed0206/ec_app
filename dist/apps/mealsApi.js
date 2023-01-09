"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMeal_1 = require("../functions/getMeal");
const functions_1 = require("../tokens/functions");
const mealsRouter = (0, express_1.Router)();
mealsRouter.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (authorization) {
            yield (0, functions_1.verifyToken)(authorization);
            next();
        }
        else {
            throw 'No token';
        }
    }
    catch (error) {
        res.sendStatus(401);
    }
}));
mealsRouter.get('/:ingredient', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ingredient } = req.params;
    const meals = yield (0, getMeal_1.getMeals)(ingredient);
    res.send(meals);
}));
exports.default = mealsRouter;
