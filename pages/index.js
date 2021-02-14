import React, { Component } from "react";
import Link from "next/link"; //case sensitive address
import Router from "next/router"; //case sensitive address

class indexPage extends Component {
  //static lifecycle method and async
  static getInitialProps(context){
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve({appName: 'test name'})
      }, 1000)
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The main Page of {this.props.appName}</h1>
        {/* Note href, not 'to' and <a></a> wrapped inside */}
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>{" "}
        </p>
        {/* Note: in arrow function and Router {} with .push() method */}
        <button
          onClick={() => {
            Router.push("/auth");
          }}
        >
          Go to Auth
        </button>
      </div>
    );
  }
}

export default indexPage;
