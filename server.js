const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Set Handlebars as the view engine
const hbs = exphbs.create({
  // You can optionally define configurations here if needed
  layoutsDir: 'views/layouts/',  // Specify where your layouts are stored
  partialsDir: 'views/partials/', // Specify where your partials are stored
  defaultLayout: 'main', // Specify the default layout
});

// Use the `hbs.engine` for setting Handlebars as the view engine
app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

// Serve static files (like script.js, images, styles)
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home - Allan John',
        profilePic: '/images/profile.jpg',  //Profile pic path
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
