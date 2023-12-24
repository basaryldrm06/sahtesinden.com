const express = require('express');
const ip = require('ip');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const serverIP = ip.address();

app.set('view-engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/home', (request, response) => {
    response.render("home");
});

app.listen(PORT, () => {
    console.log('\n\nSERVER HAS BEEN STARTED');
    console.log('SAHTESINDEN.COM\n');
    console.log(`\thttp://localhost:${PORT}`);
    console.log(`\thttp://${serverIP}:${PORT}`);
});