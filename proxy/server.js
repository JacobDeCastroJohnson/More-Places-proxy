const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/rooms/:roomId', express.static(path.join(__dirname, 'public')));

// Photo-gallery
app.use('/api/photogallery/:roomId', createProxyMiddleware({ target: `http://54.219.99.93:3001/`, changeOrigin: true}));

// Calendar
app.use('/api/calendar', createProxyMiddleware({ target: `http://calendar-service:3002`, changeOrigin: true}));

// Reviews
app.use('/api/rooms/:roomId', createProxyMiddleware({ target: `http://http://3.136.76.170:3003`, changeOrigin: true}));

// More places
app.use('/api/more_places', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
app.use('/api/saved_lists', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
app.use('/api/create_list', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
app.use('/api/update_listing', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
app.use('/api/update_collection', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
app.use('/api/collection_name', createProxyMiddleware({ target: `http://http://54.219.211.68:3004/`, changeOrigin: true}));
