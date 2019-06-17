const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express-cors');

const app = express()
app.use(cors({
    allowedOrigins: [
        'localhost:8080', '127.0.0.1:8080', 'localhost:5500', '127.0.0.1:5500'
    ]
}))
app.use(bodyParser());

const addRoutes = require('./routes/Route')
addRoutes(app)

app.listen(3000, 
    () => console.log('Example app listening on port 3000!')
)