// Paquetes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app = express();

mongoose
  .connect(
    'mongodb+srv://personal:fz$J^DnyHe!4^FeA@qsd.6xo4kct.mongodb.net/Gastos?retryWrites=true&w=majority'
  )
  .then(db => console.log('DB Conectada'))
  .catch(err => console.log(err));

// Configuracion
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public/js', express.static(__dirname + '/public/js', {type: 'text/javascript'}));

//Modelos
const Gasto = require('./models/gastos');

// Rutas
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/agregar', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/formGasto.html'));
});

app.post('/agregar', async function (req, res) {
  let datos_enviados = req.doby;
  let nuevo_gasto = new Gasto(datos_enviados);
  await nuevo_gasto.save();
  res.send('el gasto se guardo con exito');
});

app.get('/listado', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/listado.html'));
});

app.get('/obtener_gastos', async function (req, res) {
  let docs = await Gasto.find();
  res.send(docs);
});

// Inicia el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor listo en el puerto ${app.get('port')}`);
});
