const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM movies ORDER BY id`;
  pool.query(queryText)
    .then(result => res.send(result.rows))
    .catch(error => console.log(error));
});

module.exports = router;