const express = require('express');
const fs = require('fs');
const app = express();

// Read HTML files
const HomePage=fs.readFileSync(`${__dirname}/index.html`,'utf-8')

// Serve static assets
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/Logo', express.static('Logo'));
app.use('/SampleImage', express.static('SampleImage'));
app.use('/Images',express.static('Images'))

app.get('/Home',(req,res)=>{
    res.end(HomePage)
})

app.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:8000');
});
