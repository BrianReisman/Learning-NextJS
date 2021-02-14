import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => {
  return(
    <div>
      <h1>The auth Index Page</h1>
      <User name='Brian' age="30" />
    </div>
)
};

export default authIndexPage;