const express = require('express');

const issueRouter = express.Router();

function router(nav) {
  issueRouter.get('/', (req, res) => {
    res.render('Issues/index', {
      title: 'Issues Page - NodeJS App with Auth - By Ali Shaikh',
      nav
    });
  });

  issueRouter.get('/single', (req, res) => {
    res.send('Single Issue Page - NodeJS App with Auth - By Ali Shaikh');
  });
  return issueRouter;
}

module.exports = router;
