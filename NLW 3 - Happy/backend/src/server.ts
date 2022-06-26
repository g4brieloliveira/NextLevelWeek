import express from 'express';
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection'
import routes from './routes'
import errorHandler from './errors/handler'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = Conjunto
//Recurso = Usuario

//Métodos HTTP = GET, POST, PUT, DELETE
//GET = Buscar uma informação
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deleta uma informação

//Parâmetros = 
//QUERY = http://localhost:3333/users?search=diego
//ROUTE = http://localhost:3333/users/1 (Identificar um recurso)
//BODY = http://localhost:3333/users (Identificar um recurso)


app.listen(3333)