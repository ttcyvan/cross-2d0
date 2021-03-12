const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.post('/', (req, res) => {
    res.json({"post user"});
});

app.post('/user/:id/task', (req, res) => {
    res.json({"post one task"});
});

app.get('/user/:id', (req, res) => {
    res.json({"get task by user"});
});

app.delete('/user/:id', (req, res) => {
    res.json({"delete user"});
});
