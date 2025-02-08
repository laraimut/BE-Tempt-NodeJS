// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/crud-app')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Schema untuk data
const itemSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

// CRUD Routes

// Create
app.post('/api/items', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(400).send('Error saving item');
  }
});

// Read
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(400).send('Error fetching items');
  }
});

// Update
app.put('/api/items/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const item = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).send('Error updating item');
  }
});

// Delete
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(400).send('Error deleting item');
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
