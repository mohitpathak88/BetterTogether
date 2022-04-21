const express = require('express');

const app = express();


app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(4000);


app.get('/', (req, res) => {
    const NGOs = [
            {title: 'Goonj Ngo', snippet:'Clothes', body: 'Needs clothes for children'}
    ];
    res.render('index2', {NGOs});
});

app.get('/create', (req, res) => {
    res.render('create');
});