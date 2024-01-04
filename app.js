// Importing Express.js
const express = require('express');
const app = express();
require('dotenv').config()
const rateLimit = require('express-rate-limit')
// Define a route for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World! from order services');
// });

const rootCtx = '/order-service/api/v2'
const serviceRootContext = rootCtx
const limiter = rateLimit({
    max: 100000,
    windowMs: 1 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
})

app.use(`${serviceRootContext}`, limiter)
app.get('/order-service/api/v2/', function (req, res) {
    res.send('Hello from order service !!')
})

// Specify the port to listen on
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
