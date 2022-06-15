import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
//books data
import { data } from "./books";
//Book
import SpecificBook from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
