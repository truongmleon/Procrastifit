import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
);

app.get('/api/v1', (req, res) => {
    const data = [
        {GenerationOne: "http://localhost:4000/api/v1/GenerationOne"}
    ]
    res.json(data);
});

app.listen(4000);