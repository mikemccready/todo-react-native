// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + './../index.html'));
})

app.listen(PORT, () => {
	console.log('listening port 3000..')
})