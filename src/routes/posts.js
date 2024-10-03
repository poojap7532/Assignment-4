const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
});

// Get All Posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

// Get Single Post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

// Edit Post
router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
});

// Delete Post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;



// Create Post with Image
router.post('/', upload.single('image'), async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({
        title,
        content,
        image: req.file ? req.file.path : null // Save image path
    });
    await newPost.save();
    res.status(201).json(newPost);
});

// Fetch all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});
