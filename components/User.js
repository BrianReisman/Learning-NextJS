import React from "react";

const User = (props) => {
  return (
    <div>
      test from User.js
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      {/* style tag w/'jsx' as prop without value */}
      {/* //* put this in {} to escape from JSX land and use `` like in styled-components */}
      <style jsx>{`
        div{
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default User;
