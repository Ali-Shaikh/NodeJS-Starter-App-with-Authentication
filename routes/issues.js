const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Issues/index', { title: 'Issues Page - NodeJS App with Auth - By Ali Shaikh' });
});

router.get('/single', (req, res, next) => {
  res.send('Single Issue Page - NodeJS App with Auth - By Ali Shaikh' );
});

module.exports = router;
