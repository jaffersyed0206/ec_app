import { Ingredients, Meals } from '../models/Meals';
import { mealsDb } from '../network/axios'

const getMealDetails = async (id: number): Promise<Meals> => { 
    const { data } = await mealsDb.get(`json/v1/1/lookup.php?i=${id}`);

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const currentIngredient = new Ingredients(
            data?.meals[0][`strIngredient${i}`],
            data?.meals[0][`strMeasure${i}`]
        );
        ingredients.push(currentIngredient);
    }

    const meal = data?.meals[0];
    return new Meals(
        meal.idMeal,
        meal.strMeal,
        meal.strInstructions,
        meal.strTags?.split(','),
        meal.strMealThumb,
        meal.strYoutube,
        ingredients
    )
}

export const getMeals = async (ingredient: string): Promise<Array<Meals>> => { 
    const { data } = await mealsDb.get(`json/v1/1/filter.php?i=${ingredient}`);
    if (!data?.meals) return Promise.resolve([]);
    const response = [];
    for (const meal of data?.meals) {
        response.push(await getMealDetails(meal?.idMeal));
    }
    return response;
} 
