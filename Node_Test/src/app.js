/* const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    console.log('Comunicacion con el servidor');

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
    });

    let leerArchivo = fs.createReadStream(__dirname + '/index.html');

    leerArchivo.pipe(res);
  })
  .listen(3000, function () {
    console.log('Servidor listo a la escucha ');
  }); */
const PORT = 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/style', express.static('style'));
app.use('/js', express.static('js'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/registro', function (req, res) {
  res.sendFile(__dirname + '/login.html');
});

app.get('/inicioSesion', function (req, res) {
  res.sendFile(__dirname + '/singUp.html');
});

app.post('/form_login', (req, res) => {
  let {name, email, password} = req.body;
});

app.post('/inicioSes', (req, res) => {
  console.log('Formulario enviado');
  console.log(req.body);
});

app.listen(PORT, function () {
  console.log('Servidor listo y escuchando en el puerto ' + PORT);
});
