"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importa o express
//importa o bodyParser
const app = (0, _express.default)(); //cria nova instancia do express

app.use(_bodyParser.default.json()); //metódo do express "use" que aceita middlewares como parâmetro. bodyParser.json transforma as requisições em json.

app.get('/', (req, res) => res.send('Hello World!'));
/*
*/

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});