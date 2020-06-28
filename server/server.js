const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const moviesRouter = require('./routes/movies.router.js');
const genresRouter = require('./routes/genres.router.js');
const detailsRouter = require('./routes/details.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ------------ ROUTES ------------ **/
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
app.use('/movies/details', detailsRouter);

/** --------- START SERVER --------- **/
app.listen(port, function () {
  console.log('Listening on port: ', port);
});