import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

import React from "react";

import "reactjs-popup/dist/index.css";


const Book = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  const handlePayment = async () => {
    console.log("provedeno");
  };

  const getBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBook(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBook();
    console.log(book.result);
  }, []);

  if (!loaded)
    return (
      <>
        <p>Loading book...</p>
      </>
    );

  return (
    <>
      <div className="card">
        <div class="card-image">
          <figure class="image">
            <img src={book.result[0].image} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h1 className="title is-3">{book.result[0].name} </h1>
              <p class="subtitle is-4">Autor {book.result[0].author}</p>
              <p class="subtitle is-5">
                Vydavatelství {book.result[0].publisher}
              </p>
              <p class="subtitle is-6">Cena {book.result[0].price} Kč</p>
              <p class="subtitle is-6">Jazyk {book.result[0].language}</p>

              <a className="button" href={props.url} target="_blank">
                Zaplatit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
