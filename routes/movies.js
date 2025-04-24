const express = require('express');
const router = express.Router();
const movies = require('../data/movies'); // Ajuste o caminho conforme necessário

// Rota para obter a lista de filmes
router.get('/', (req, res) => {
    res.json(movies); // Retorna a lista de filmes em formato JSON
});

// Rota para obter detalhes de um filme pelo ID
router.get('/:id', (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Filme não encontrado' });
    }
});

module.exports = router;