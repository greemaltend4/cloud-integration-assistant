const express = require('express');
const router = express.Router();

// Exemple de route pour AWS
router.get('/aws', (req, res) => {
  res.send('Intégration avec AWS');
});

// Exemple de route pour Google Cloud
router.get('/google-cloud', (req, res) => {
  res.send('Intégration avec Google Cloud');
});

// Exemple de route pour Azure
router.get('/azure', (req, res) => {
  res.send('Intégration avec Azure');
});

module.exports = router;
