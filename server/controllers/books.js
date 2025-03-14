const db = require("../helpers/db");

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Books found",
      result,
    });
  });
};

exports.getBookById = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book found",
        result,
      });
    }
  );
};

exports.postBook = (req, res) => {
  db.query(
    "INSERT INTO books (name, category, info, velikost, spec, price, image, api, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [req.body.name, req.body.category, req.body.info, req.body.velikost, req.body.spec, req.body.price, req.body.image, req.body.api, req.body.url],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book created",
        result,
      });
    }
  );
};

exports.putBook = (req, res) => {
  db.query(
    "UPDATE books SET name = ?, category = ?, info = ?, velikost = ?, spec = ?, price = ?, image = ?, api = ?, url = ? WHERE id = ?;",
    [req.body.name, req.body.category, req.body.info, req.body.velikost, req.body.spec, req.body.price, req.body.image, req.body.api, req.body.url, req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book updated",
        result,
      });
    }
  );
};

exports.deleteBook = (req, res) => {
  db.query(
    "DELETE FROM books WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book deleted",
        result,
      });
    }
  );
};
