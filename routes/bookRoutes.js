const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.get('/', (req, res) => {
    (async function query() {
      const request = new sql.Request();
      const result = await request.query('select * from Books');
      res.render('Books/bookListView', {
        title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
        books: result.recordset,
        nav
      });
    }());
  });
  bookRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.render('Books/bookView', {
      title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
      book: books[id],
      nav
    });
  });
  return bookRouter;
}

module.exports = router;
