import { Router } from 'express';
import { getMeals } from '../functions/getMeal';
import { verifyToken } from '../tokens/functions';

const mealsRouter = Router();

mealsRouter.use(async(req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (authorization) {
            await verifyToken(authorization)
            next();
        } else {
            throw 'No token'
        }
    } catch (error) {
        res.sendStatus(401)
    }
})

mealsRouter.get('/:ingredient', async (req, res) => {
    const { ingredient } = req.params;
    const meals = await getMeals(ingredient);
    res.send(meals);
});

export default mealsRouter;