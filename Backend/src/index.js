const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
    Rota
    Recurso: o que vem depois da barra /recurso

    Métodos HTTP:

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação do back-end
    PUT: Alterar uma informação do back-end
    DELETE: Deletar uma informação do back-end

    Tipos de parâmetros

    Query Params: Parâmetros nomeados enviados na rota após a ? Ex ?name=Gabriel&idade=22
    Route Params: Parâmetros utilizados para identificar recursos. Ex users/1
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
    */



app.listen(3333);