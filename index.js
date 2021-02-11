const express = require('express');
const app = express();
const path = require("path")

const PORT = process.env.PORT || 80;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, console.log('online'))