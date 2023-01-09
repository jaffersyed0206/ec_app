import { mealsDb } from '../network/axios'

export const getMeals: any = async (ingredient: string) => { 
    const { data } = await mealsDb.get(`json/v1/1/filter.php?i=${ingredient}`);
    return data;
} 
