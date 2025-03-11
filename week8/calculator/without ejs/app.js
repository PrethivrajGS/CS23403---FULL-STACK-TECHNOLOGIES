const express = require("express");
const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <style>
        #head
        {
            text-align: center;
        }
        #body
        {
            background-color: black;
        }
        #actions
        {
            text-align: center;
            background-color: white;
            align-items: center;
            font-size: 36px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }
        #button
        {
            font-size: 36px;
        }
    </style>
</head>
<body>
    <div id="actions">
    <h2>Simple Calculator</h2>
    <form method="post" action="/calculate">
        <label for="a">First Number:</label>
        <input type="text" id="a" name="a" required>
        <br>

        <label>Choose Operation:</label>
        <select name="operation" id="operation">
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (-)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (/)</option>
        </select>
        <br>

        <label for="b">Second Number:</label>
        <input type="text" id="b" name="b" required>
        <br>

        <button type="submit">Enter</button>
    </form>
    </div>
</body>
</html>`);
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
        c = b !== 0 ? a / b : 'undefined';
    }

    res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Result</title>
    <style>
        #head
        {
            text-align: center;
        }
        #body
        {
            background-color: black;
        }
        #actions
        {
            text-align: center;
            background-color: white;
            align-items: center;
            font-size: 36px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }
        #button
        {
            font-size: 36px;
        }
    </style>
</head>
<body>
    <form method="post" action="/">
    <div id="actions">
    <h2>Calculation Result</h2>
    <p><strong>${a} </strong> ${op} <strong>${b}</strong> = <strong>${c}</strong></p>
    <button>Calculate more</button>
    </div>
    </form>
</body>
</html>`
);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
    <style>
        #head
        {
            text-align: center;
        }
        #body
        {
            background-color: black;
        }
        #actions
        {
            text-align: center;
            background-color: white;
            align-items: center;
            font-size: 36px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }
        #button
        {
            font-size: 36px;
        }
    </style>
</head>
<body>
    <div id="actions">
    <h2>Simple Calculator</h2>
    <form method="post" action="/calculate">
        <label for="a">First Number:</label>
        <input type="text" id="a" name="a" required>
        <br>

        <label>Choose Operation:</label>
        <select name="operation" id="operation">
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (-)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (/)</option>
        </select>
        <br>

        <label for="b">Second Number:</label>
        <input type="text" id="b" name="b" required>
        <br>

        <button type="submit">Enter</button>
    </form>
    </div>
</body>
</html>`);
});
