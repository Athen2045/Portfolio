const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Set Handlebars as the view engine
const hbs = exphbs.create({
  // Specify any Handlebars configurations here (optional)
});

app.engine('handlebars', hbs.engine); // Use `hbs.engine` instead of just `exphbs()`
app.set('view engine', 'handlebars');

// Serve static files (like script.js, images, styles)
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home - Allan John',
        profilePic: '/profile.jpg',  // Example profile pic path
        name: 'Allan John',
        tagline: 'Software Developer | Illustrator | Reader'
    });
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About - Allan John'
    });
});

// Route for the projects page
app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Allan John'
    });
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Allan John'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
