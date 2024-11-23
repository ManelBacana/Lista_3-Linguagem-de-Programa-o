// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas2 = express.Router();


// GET
// rota para acesar o método GET para professor
rotas2.get('/', (req, res) => {
    res.send('Você acessou a rota professor.')
})

// POST
// rota para acesar o método POST para professor
rotas2.post('/cadastro', (req, res) => {
    res.send('Você está na rota para o cadastro de um novo professor.');
});


// PUT
// rota para acesar o método PUT para professor
rotas2.put('/atualizacao', (req, res) => {
    res.send('Você está na rota para a atualização dos dados de um professor.');
});


// DELETE
// rota para acesar o método DELETE para o professor 
rotas2.delete('/cadastro/id', (req, res) => {
    res.send('Você está na rota para deletar os dados de um professor')
});

module.exports = rotas2