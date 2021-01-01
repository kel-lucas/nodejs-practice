import express from 'express'; //importa o express
import bodyParser from 'body-parser'; //importa o bodyParser

const app = express(); //cria nova instancia do express
app.use(bodyParser.json()); //metódo do express "use" que aceita middlewares como parâmetro. bodyParser.json transforma as requisições em json.

app.get('/', (req, res) => res.send('Hello World!')); /*
 */

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
})