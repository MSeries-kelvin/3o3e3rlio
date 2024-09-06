import express from 'express';

const app = express();

app.post('/api/message/', (request, response) => {
    const data = request.body;
    console.log(data);
});

app.listen('3000', () => {
    console.log(`Running on port 3000`);
})