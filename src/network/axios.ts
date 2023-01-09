import axios, {AxiosInstance} from 'axios';

export const mealsDb: AxiosInstance = axios.create({
    baseURL: "https://www.themealdb.com/api/",
});

