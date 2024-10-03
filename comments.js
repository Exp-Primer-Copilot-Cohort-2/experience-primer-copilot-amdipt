// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
    {
        id: 1,
