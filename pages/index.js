import React from 'react';
import Link from 'next/link'; //case sensitive address
import Router from 'next/router'; //case sensitive address

const indexPage = (props) => {
  return(
    <div>
      <h1>The main Page</h1>
        {/* Note href, not 'to' and <a></a> wrapped inside */}
        <p>Go to <Link href="/auth"><a>Auth</a></Link> </p>
        {/* Note: in arrow function and Router {} with .push() method */}
        <button onClick={()=>{Router.push('/auth')}}>Go to Auth</button>
    </div>
)
};

export default indexPage;