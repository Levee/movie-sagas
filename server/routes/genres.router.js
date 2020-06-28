const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/:id', (req, res) => {
  const queryText = `
    SELECT title, array_agg(genres.name) AS genres FROM movies
      JOIN movies_genres ON movies_genres.movie_id = movies.id
      JOIN genres  ON genres.id = movies_genres.genre_id
      WHERE movies.id = $1
      GROUP BY movies.title;`;
  pool.query(queryText, [req.params.id])
    .then(result => res.send(result.rows))
    .catch(error => console.log(error));
});

module.exports = router;