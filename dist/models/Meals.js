"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meals = exports.Ingredients = void 0;
class Ingredients {
    constructor(ingredient = '', measure = '') {
        this.ingredient = ingredient;
        this.measure = measure;
    }
    getIngredient() {
        return this.ingredient;
    }
    setIngredient(ingredient) {
        this.ingredient = ingredient;
    }
    getMeasure() {
        return this.measure;
    }
    setMeasure(measure) {
        this.measure = measure;
    }
}
exports.Ingredients = Ingredients;
class Meals {
    constructor(id = 0, name = '', instructions = '', tags = [], thumbUrl = '', youtubeUrl = '', ingredients = new Array()) {
        this.id = id;
        this.name = name;
        this.instructions = instructions;
        this.tags = tags;
        this.thumbUrl = thumbUrl;
        this.youtubeUrl = youtubeUrl;
        this.ingredients = ingredients;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getInstructions() {
        return this.instructions;
    }
    setInstructions(instructions) {
        this.instructions = instructions;
    }
    getTags() {
        return this.tags;
    }
    setTags(tags) {
        this.tags = tags;
    }
    getThumbUrl() {
        return this.thumbUrl;
    }
    setThumbUrl(thumbUrl) {
        this.thumbUrl = thumbUrl;
    }
    getYoutubeUrl() {
        return this.youtubeUrl;
    }
    setYoutubeUrl(youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }
    getIngredients() {
        return this.ingredients;
    }
    setIngredients(ingredients) {
        this.ingredients = ingredients;
    }
}
exports.Meals = Meals;
