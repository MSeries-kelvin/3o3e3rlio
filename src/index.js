import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/message/', (request, response) => {
    const data = request.body;
    console.log(data);

    response.status(200).send({msg: "ok"});
});

app.listen('3000', () => {
    console.log(`Running on port 3000`);
})