require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cardsRouter = require('./routes/cardsRoutes');
var attackRouter = require('./routes/attackRoutes')
var restoreRouter = require('./routes/restoreRoutes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/cards',cardsRouter);
app.use('/api/attack', attackRouter);
app.use('/api/restore', restoreRouter);

module.exports = app;
