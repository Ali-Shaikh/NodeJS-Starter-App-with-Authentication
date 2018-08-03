const express = require('express');

const router = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Books/bookListView', {
    title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
    books,
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

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.render('Books/bookView', {
    title: 'Books Page - NodeJS App with Auth - By Ali Shaikh',
    book: books[id],
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
