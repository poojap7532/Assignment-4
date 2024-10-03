import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setTitle(res.data.title);
            setContent(res.data.content);
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
        navigate(`/posts/${id}`);
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
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPost;
