import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import Post from './Post';

import postData from './data';

ReactDOM.render(
  <React.StrictMode>
    <Hello name={"Michael"} age={32} />
    <Post 
      title={postData.post.title} 
      author={postData.post.author} 
      body={postData.post.body} 
      comments={postData.post.comments} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);
