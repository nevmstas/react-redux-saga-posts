import React from 'react';
import PostFrom from './Components/PostForm'
import FetchedPosts from './Components/FetchedPosts'
import Posts from './Components/Posts'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostFrom />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Sync posts</h3>
          <Posts posts = {[1, 2, 3]}/>
        </div>
        <div className="col">
          <h3>Async posts</h3>
          <FetchedPosts posts = {[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
