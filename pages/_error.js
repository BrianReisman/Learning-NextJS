import React from "react";
import Link from "next/link"; //case sensitive address

const errorPage = (props) => {
  return (
    <div>
      <h1>Oh no! What happened??!</h1>
      <p>Try going back</p>
      <p>
        Go to{" "}
        <Link href="/">
          <a>home</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default errorPage;
