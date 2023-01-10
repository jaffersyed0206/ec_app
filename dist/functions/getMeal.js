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
exports.getMeals = void 0;
const Meals_1 = require("../models/Meals");
const axios_1 = require("../network/axios");
const getMealDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data } = yield axios_1.mealsDb.get(`json/v1/1/lookup.php?i=${id}`);
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const currentIngredient = new Meals_1.Ingredients(data === null || data === void 0 ? void 0 : data.meals[0][`strIngredient${i}`], data === null || data === void 0 ? void 0 : data.meals[0][`strMeasure${i}`]);
        ingredients.push(currentIngredient);
    }
    const meal = data === null || data === void 0 ? void 0 : data.meals[0];
    return new Meals_1.Meals(meal.idMeal, meal.strMeal, meal.strInstructions, (_a = meal.strTags) === null || _a === void 0 ? void 0 : _a.split(','), meal.strMealThumb, meal.strYoutube, ingredients);
});
const getMeals = (ingredient) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.mealsDb.get(`json/v1/1/filter.php?i=${ingredient}`);
    const response = [];
    for (const meal of data.meals) {
        response.push(yield getMealDetails(meal.idMeal));
    }
    return response;
});
exports.getMeals = getMeals;
