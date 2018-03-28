const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controllers/books_controller')

const app = express();


app.use(bodyParser.json());







const port = 3000;
app.listen(port, () => {
    console.log(`Ye olde server doth listen on port ${port}...`);
});