const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'NodeJS App with Auth - By Ali Shaikh',
    nav: [{
      link: '/books',
      title: 'Books'
    }, {
      link: '/authors',
      title: 'Authors'
    }, {
      link: '/issues',
      title: 'Issues',
    }]
  });
});

module.exports = router;
