const express = require('express');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const app = express();
const veggies = require('./veggies');

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Csrf activation
const csrfProtection = csrf({ cookie: true });

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// (GET) - All veggies
app.get('/veggies', csrfProtection, (req, res) => {
  res.json(veggies);
});

// (GET) - One veggie by id
app.get('/veggies/:id', csrfProtection, (req, res) => {
  const veggieId = parseInt(req.params.id);
  const veggie = veggies.find((veggie) => veggie.id === veggieId);

  if (veggie) {
    res.json(veggie);
  } else {
    res.status(404).json({ error: 'Veggie not found' });
  }
});

// (POST) - New veggie
app.post('/veggies', csrfProtection, (req, res) => {
  const newVeggie = req.body;

  // Validation des données d'entrée
  if (!newVeggie || !newVeggie.name || !newVeggie.protein) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  newVeggie.id = veggies.length + 1;

  veggies.push(newVeggie);

  res.status(201).json(newVeggie);
});

// (PUT) - Update veggie
app.put('/veggies/:id', csrfProtection, (req, res) => {
  const veggieId = parseInt(req.params.id);
  const updatedVeggie = req.body;

  const index = veggies.findIndex((veggie) => veggie.id === veggieId);

  if (index !== -1) {
    veggies[index] = { ...veggies[index], ...updatedVeggie };
    res.json(veggies[index]);
  } else {
    res.status(404).json({ error: 'Veggie not found' });
  }
});

// (DELETE) - Delete veggie
app.delete('/veggies/:id', csrfProtection, (req, res) => {
  const veggieId = parseInt(req.params.id);
  const index = veggies.findIndex((veggie) => veggie.id === veggieId);

  if (index !== -1) {
    const deletedVeggie = veggies.splice(index, 1);
    res.json(deletedVeggie[0]);
  } else {
    res.status(404).json({ error: 'Veggie not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
