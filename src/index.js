const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const path = require('path');
const PORT = 8080;


const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'))

// Http logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// Routes init
route(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});