import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import EditPost from './components/EditPost';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Blog</h1>
        <PostForm />
        <PostList />
        <Routes>
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
