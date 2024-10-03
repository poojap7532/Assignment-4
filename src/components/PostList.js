import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        fetchPosts();
    };

    return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map((post) => (
                <div key={post._id}>
                    <h3>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </h3>
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            ))}

            {posts.map((post) => (
                <div key={post._id}>
                    <h3>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </h3>
                    {post.image && <img src={`http://localhost:5000/${post.image}`} alt={post.title} width="100" />}
                    <p>{new Date(post.createdAt).toLocaleString()}</p>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};




export default PostList;
