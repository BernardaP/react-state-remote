// import react
// const React = require("reqct")
import React from 'react';

// define our Hello component
function Hello(props) {
  // ...
  // define the UI that is returned
  return (
    <>
      <h1 className="test">Hello { props.name }!</h1>
      <p>You are { props.age } years old</p>
    </>
  )
}

// export the component for use in other files
export default Hello;