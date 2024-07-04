import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Post from './Post';
import { ThemeToggleProvider } from '../styles/ThemeContext';

const PostSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from an API
    const fetchPosts = async () => {
      // Replace with your API call
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <ThemeToggleProvider>
    <Box sx={{ flexGrow: 1, padding: 5, height: '100vh', width: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'transparent', marginBlockEnd: 10, mx: {sm: '20px', md: 'auto'}, my: {sm: '20px', md: 0} }}>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <Typography variant="h6" color="textSecondary">
          No posts yet
        </Typography>
      )}
    </Box>
    </ThemeToggleProvider>
  );
};

export default PostSection;
