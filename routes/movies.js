const express = require('express');
   const router = express.Router();
   const movies = require('../data/movies'); // Ajuste o caminho conforme necessário

   // Rota para obter a lista de filmes
   router.get('/', (req, res) => {
       res.json(movies); // Retorna a lista de filmes em formato JSON
   });

   module.exports = router;