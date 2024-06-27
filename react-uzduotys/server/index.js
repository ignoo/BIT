const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const fs = require('node:fs');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());

// router


app.get('/bankas', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    res.json(data);
});

app.post('/bankas', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    const newRow = req.body;
    newRow.id = uuidv4();
    data.push(newRow);
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.json({ id: newRow.id });
})

app.delete('/bankas/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    const id = req.params.id;
    data = data.filter(row => row.id !== id);
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.json({ message: 'Gerai', type: 'info' });
});

app.put('/bankas/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    const id = req.params.id;
    const updatedRow = req.body;
    data = data.map(row => row.id === id ? {...updatedRow, id } : row);
    fs.writeFileSync('./data/data.json', JSON.stringify(data));
    res.json({ message: 'Row updated', type: 'info' });
});
  

app.listen(port, () => {
  console.log(`Bankas klauso ${port} port'o`);
});