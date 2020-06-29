const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.put('/:id', (req, res) => {
  const title = req.body.movie.title;
  const description = req.body.movie.description;
  const id = req.params.id;
  const queryText = `
    UPDATE movies
      SET title = $1, description = $2
      WHERE id = $3`;
  pool.query(queryText, [title, description, id])
    .then(result => res.sendStatus(200))
    .catch(error => console.log(error));
});

module.exports = router;