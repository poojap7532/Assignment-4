import React, { useState } from 'react';
import axios from 'axios';

var PostForm = ({ refreshPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/posts', { title, content });
        refreshPosts();
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Add Post</button>
        </form>
    );
};



var PostForm = ({ refreshPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }
        await axios.post('http://localhost:5000/api/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        refreshPosts();
        setTitle('');
        setContent('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
