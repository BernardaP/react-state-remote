// react import
import React from 'react';
import Comment from './Comment';

// component definition
function Post(props) {
  let comments = props.comments.map((comment, index) => ( 
    <Comment message={comment} key={index} /> 
  ))

  return (
    <div className="post-page">
      <h1>{ props.title }</h1>
      <p>By: { props.author }</p>
      <hr/>
      <p>{ props.body }</p>
      <h3>Comments</h3>
      { comments.length === 0 ? "No comments here" : comments }
    </div>
  )
}

// export
export default Post;