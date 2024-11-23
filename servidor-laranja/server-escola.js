// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 5000;

// criação do aplicativo servidor
const app = express();

// importação da configurações dos estudantes
const estudanteRotas = require('./routes/estudantes.js')

//importação da configurações dos professores
const professorRotas = require('./routes/professores.js')

//Rota da Raiz
app.get('/', (req, res) => {
    res.send('Se ta na raiz do servidor')
})

//configurar as rotas para estudantes 
app.use('/estudante', estudanteRotas);

//configurar as rotas para professores 
app.use('/professor', professorRotas);

//executadando o servidor 
app.listen(port, localhost, console.log('Ta Funfando....'))