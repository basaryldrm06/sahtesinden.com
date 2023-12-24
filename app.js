const express = require('express');
const ip = require('ip');
const path = require('path');

const bootstrap5js = path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css');
const bootstrap5css = path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.bundle.min.js');

const app = express();
const PORT = process.env.PORT || 3000;
const serverIP = ip.address();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/home', (request, response) => {
    response.render("pages/home");
});

app.use('bootstrap/css', express.static(bootstrap5css));
app.use('bootstrap/js', express.static(bootstrap5js));

app.listen(PORT, () => {
    console.log('\n\nSERVER HAS BEEN STARTED');
    console.log('SAHTESINDEN.COM\n');
    console.log(`\thttp://localhost:${PORT}`);
    console.log(`\thttp://${serverIP}:${PORT}`);
});