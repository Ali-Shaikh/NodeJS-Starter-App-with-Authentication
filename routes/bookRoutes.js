const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

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
  bookRouter.get('/:id', (req, res) => {
    (async function query() {
      const { id } = req.params;
      const request = new sql.Request();
      const { recordset } = await request.input('ID', sql.Int, id)
        .query('select * from Books where ID = @id');
      res.render('Books/bookView', {
        title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
        book: recordset[0],
        nav
      });
    }());
  });
  return bookRouter;
}

module.exports = router;
