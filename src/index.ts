import express, {Express, Request, Response} from 'express';
import { generateToken } from './tokens/functions';
import mealsRouter from './apps/mealsApi';

const app: Express = express();

app.get('/token/:email', (req: Request, res: Response) => {
    const { email } = req.params;
    res.json({
        jwt: generateToken(email)
    })
})

app.use('/meals', mealsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})