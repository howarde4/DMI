const express = require('express');
const cors = require('cors');
const ExpressError = require('./expressError');

const todoRoutes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

//404 handler
app.use(function (req, res) {
    return new ExpressError("Not Found", 404);
});

//generic error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

module.exports = app;