import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import NewsItem from './NewsItem';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching news from an API
    const fetchNews = async () => {
      // Replace with your API call
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', md: 'auto' },
    maxWidth: { xs: '90%', sm: '70%', md: 600 },height: 'auto', maxHeight: 800, flexDirection: 'column',
    margin: { xs: '20px auto', md: '100px auto' }, textAlign: 'center',
    position: { xs: 'relative', md: 'absolute' },
    top: { xs: 'auto', md: 0 }, // auto for small screens, top 0 for medium and larger
    left: { xs: 'auto', md: '50rem' },
    mx: { xs: 'auto', md: 34 }, borderRadius: '30px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      {news.length > 0 ? (
        news.map((newsItem) => <NewsItem key={newsItem.id} news={newsItem} />)
      ) : (
        <Typography variant="h6" color="textSecondary">
          No news yet
        </Typography>
      )}
    </Box>
  );
};

export default NewsSection;
