import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sign-up', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});

app.listen(process.env.PORT, () => {
    console.log(`listening to : http://localhost:${process.env.PORT}`);
});
