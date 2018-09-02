const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');
const Raven = require('raven');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.get('/', (req, res) => {
    (async function query() {
      const request = new sql.Request();
      const { recordset } = await request.query('select * from Books');
      res.render('Books/bookListView', {
        title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
        books: recordset,
        nav
      });
    }());
  });
  bookRouter.route('/:id')
    .all((req, res, next) => {
      (async function query() {
        const { id } = req.params;
        const request = new sql.Request();
        const { recordset } = await request.input('ID', sql.Int, id)
          .query('select * from Books where ID = @id');
        req.book = recordset[0];
        // [req.book] = recordset;
        next();
      }());
    })
    .get((req, res) => {
      res.render('Books/bookView', {
        title: 'Book Details Page - NodeJS App with Auth - By Ali Shaikh',
        book: req.book,
        nav
      });
    });
  return bookRouter;
}

module.exports = router;
