const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  const sqlText = `SELECT g.name FROM movies AS m
                  JOIN movies_genres AS mg ON m.id = mg.movies_id
                  RIGHT JOIN genres AS g ON g.id = mg.genres_id
                  WHERE mg.movies_id=$1;`;
  let movieId = req.params.id;
  console.log(movieId);
  // pool query
  pool.query(sqlText, [movieId])
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log('error retrieving movie genres......', error);
      });
})

router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM genres;`;
  // pool query
  pool.query(sqlText)
      .then((result) => {
        res.send(result.rows)
      }).catch((error) => {
        console.log('error retrieving movie genres......', error);
      });
  
});

module.exports = router;