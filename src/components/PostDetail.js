import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(res.data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{new Date(post.createdAt).toLocaleString()}</p>
            <Link to={`/edit/${post._id}`}>Edit Post</Link>



            <h2>{post.title}</h2>
            {post.image && <img src={`http://localhost:5000/${post.image}`} alt={post.title} />}
            <p>{post.content}</p>
            <p>{new Date(post.createdAt).toLocaleString()}</p>
            <Link to={`/edit/${post._id}`}>Edit Post</Link>
        </div>


    );
};




export default PostDetail;
