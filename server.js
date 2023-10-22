const express = require('express');
const fs = require('fs');
const app = express();

// Read HTML files
const LandingPage = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const HomePage = fs.readFileSync(`${__dirname}/home.html`, 'utf-8');

// Serve static assets
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/Logo', express.static('Logo'));
app.use('/SampleImage', express.static('SampleImage'));
app.use('/Images',express.static('Images'))

app.post('/Home', (req, res) => {
    // No need to manually set headers; Express handles it.
    res.send(HomePage);
});

app.get('/Land', (req, res) => {
    // No need to manually set headers; Express handles it.
    res.send(LandingPage);
});



app.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:8000');
});
