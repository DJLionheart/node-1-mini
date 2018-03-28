let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
        console.log('The required tomes hath been sent...');
        
    },

    create: (req, res) => {
        let book = {
            title: req.body.title,
            author: req.body.author,
            id: id
        }
        books.push(book);
        id++;
        res.status(200).send(books);
        console.log('A tome hath been added to thine library...');
        
    },

    update: ( req, res ) => {
        
        console.log(books);
        let index = null;
        books.forEach((book, i) => {
          if(book.id === +req.params.id) index = i;
          
        })
        
        books[ index ] = {
          id: req.params.id,
          title: req.body.title || books[ index ].title,
          author: req.body.author || books[ index ].author
        };
        res.status(200).send( books );
        console.log('The requested tome hath been updated...');
        
      },

      delete: (req, res) => {
          let index = null;
          let { id } = req.params;
          books.forEach( (book, i) => {
              if(book.id === +id ) index = i;
          });
          books.splice(index, 1);
          res.status(200).send(books);
          console.log('The requested tome hath been removed...');
      }
}