const express = require('express');
const cors = require('cors');
const moviesRouter = require('./routes/movies');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Importar o arquivo swagger.json

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Usar a rota de filmes
app.use('/api/movies', moviesRouter);

// Configurar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
