export class Ingredients {
    constructor(ingredient = '', measure = '') {
        this.ingredient = ingredient;
        this.measure = measure;
    }

    private ingredient: string
    private measure: string

    getIngredient(): string {
        return this.ingredient;
    }

    setIngredient(ingredient: string): void {    
        this.ingredient = ingredient;
    }

    getMeasure(): string {        
        return this.measure;
    }   

    setMeasure(measure: string): void {       
        this.measure = measure;
    }
}

export class Meals {
    constructor(id = 0, name = '', instructions = '', tags = [], thumbUrl = '', youtubeUrl = '', ingredients = new Array<Ingredients>()) {
        this.id = id;
        this.name = name;
        this.instructions = instructions;
        this.tags = tags;
        this.thumbUrl = thumbUrl;
        this.youtubeUrl = youtubeUrl;
        this.ingredients = ingredients;
    }

    private id: number
    private name: string
    private instructions: string
    private tags: Array<string>
    private thumbUrl: string
    private youtubeUrl: string
    private ingredients: Array<Ingredients>
    
    getId(): number {
        return this.id;
    }

    setId(id: number): void {    
        this.id = id;
    }

    getName(): string {        
        return this.name;
    }   

    setName(name: string): void {       
        this.name = name;
    }

    getInstructions(): string {        
        return this.instructions;
    }       

    setInstructions(instructions: string): void {     
        this.instructions = instructions;
    }

    getTags(): Array<string> {        
        return this.tags;
    }

    setTags(tags: Array<string>): void {        
        this.tags = tags;
    }

    getThumbUrl(): string {        
        return this.thumbUrl;
    }

    setThumbUrl(thumbUrl: string): void {        
        this.thumbUrl = thumbUrl;
    }

    getYoutubeUrl(): string {        
        return this.youtubeUrl;
    }

    setYoutubeUrl(youtubeUrl: string): void {        
        this.youtubeUrl = youtubeUrl;
    }

    getIngredients(): Array<Ingredients> {
        return this.ingredients;
    }

    setIngredients(ingredients: Array<Ingredients>): void {
        this.ingredients = ingredients;
    }
}