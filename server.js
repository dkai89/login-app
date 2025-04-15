const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy login check
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Login app running on http://localhost:${port}`);
});
