const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans Cloud Integration Assistant!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});
