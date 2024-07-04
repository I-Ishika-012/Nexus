import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const NewsItem = ({ news }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{news.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {news.timestamp}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {news.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
