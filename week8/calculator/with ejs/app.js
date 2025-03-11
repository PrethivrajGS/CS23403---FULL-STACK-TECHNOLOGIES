const express = require("express");
const port = 3452;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('calculator');
});

app.post('/calculate', (req, res) => {
    let { a, b, operation } = req.body;
    a = parseFloat(a);
    b = parseFloat(b);
    
    let c = 0;
    let op = '';

    if (operation === 'add') {
        op = '+';
        c = a + b;
    } else if (operation === 'subtract') {
        op = '-';
        c = a - b;
    } else if (operation === 'multiply') {
        op = '×';
        c = a * b;
    } else if (operation === 'divide') {
        op = '/';
        c = a / b ;
    }

    res.render('result', { a, b, c, op });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/', (req, res) => {
    res.render('calculator');
});
