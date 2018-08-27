const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

app.listen(8000, () => {
    console.log('Server has started.');
});

app.route('/api/tasks/').get((req, res) => {
    res.send({
        tasks: []
    });
});

app.route('/api/tasks/').get((req, res) => {
    const requestedTaskName = req.params['name'];
    res.send({ name: requestedTaskName });
});

app.use(bodyParser.json());
app.route('/api/tasks').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/tasks/').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/tasks/').delete((req, res) =>{
    res.sendStatus(204);
});

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))