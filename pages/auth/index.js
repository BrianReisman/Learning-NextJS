import React from "react";
import User from "../../components/User";

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The auth Index Page. Props => {props.appName}</h1>
      <User name="Brian" age="30" />
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "superApp auth" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
