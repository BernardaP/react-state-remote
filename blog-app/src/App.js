// bring in React and Component instance from React
import React from 'react'

// define our Hello componentimport React from 'react';

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>You are {props.age} years old</p>
    </div>
  );
}

export default Hello;