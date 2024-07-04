import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const Post = ({ post }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={1}>
          <Avatar src={post.userAvatar} />
          <Box marginLeft={2}>
            <Typography variant="subtitle1">{post.userName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {post.timestamp}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1">{post.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
