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

const PORT = 3000 || process.env.PORT;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})