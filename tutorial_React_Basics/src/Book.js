import React from "react";
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Loki");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>reference Example</button>
      <button onClick={() => complexExample(author)}>Complex Example</button>
    </article>
  );
};
export default Book;
