import express from 'express';
import path from 'path';

// Get the directory name from import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'static')));


// Route definitions
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}.`);
});
