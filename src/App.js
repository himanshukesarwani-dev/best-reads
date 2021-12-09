import React, { useState } from "react";
import "./styles.css";

const booksDataBase = {
  Selfhelp: [
    { name: "Atomic Habits", rating: "5/5" },

    { name: "The Secret", rating: "3/5" }
  ],

  Fiction: [
    {
      name: "Life is what you make it",
      rating: "5/5"
    },
    {
      name: "The Alchemist",
      rating: "4/5"
    }
  ],
  Finance: [
    {
      name: "Rich Dad Poor Dad",
      rating: "4.5/5"
    },
    {
      name: "The Intelligent Investor",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Selfhelp");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 className="heading">BestReads</h1>
      <p>A book recommendation App. Select the category below:</p>
      {Object.keys(booksDataBase).map((genre) => {
        return (
          <button onClick={() => genreClickHandler(genre)}> {genre}</button>
        );
      })}

      <hr />

      <div>
        <ul>
          {booksDataBase[selectedGenre].map((book) => (
            <li className="list-item" key={book.name}>
              <div className="book-name"> {book.name} </div>
              <div className="book-rating"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
