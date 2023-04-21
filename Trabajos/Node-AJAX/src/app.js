// Paquetes
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

app = express();

// Configuracion
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use('/js', express.static(path.resolve('./public/js')));

// Rutas
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/registro', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/registro.html'));
});

app.get('/mi_turno', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/mi_turno.html'));
});

app.post('/form_reg', function (req, res) {
  console.log('Formulario enviado');
});

// Inicia el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor listo en el puerto ${app.get('port')}`);
});
