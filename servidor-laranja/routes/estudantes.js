// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas1 = express.Router();


// GET
// rota para acesar o método GET para estudante
rotas1.get('/', (req, res) => {
    res.send('Você acessou a rota estudante.')
})

// POST
// rota para acesar o método POST para estudante
rotas1.post('/cadastro', (req, res) => {
    res.send('Você está na rota para o cadastro de um novo estudante.');
});


// PUT
// rota para acesar o método PUT para estudante
rotas1.put('/atualizacao', (req, res) => {
    res.send('Você está na rota para a atualização dos dados de um estudante.');
});


// DELETE
// rota para acesar o método DELETE para o estudante 
rotas1.delete('/cadastro/id', (req, res) => {
    res.send('Você está na rota para deletar os dados de um aluno')
});

module.exports = rotas1