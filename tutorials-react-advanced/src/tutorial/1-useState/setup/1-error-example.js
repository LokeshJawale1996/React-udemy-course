import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    //title is not updated on ui because we cannot re render this component
    title = "hello people";

    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
