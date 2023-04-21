// Paquetes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app = express();

mongoose
  .connect(
    'mongodb+srv://personal:fz$J^DnyHe!4^FeA@qsd.6xo4kct.mongodb.net/User?retryWrites=true&w=majority'
  )
  .then(db => console.log('DB Conectada'))
  .catch(err => console.log(err));

// Configuracion
app.set('port', process.env.PORT || 3000);

// Modelos
const Users = require('./models/user');

// middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public/js', express.static(__dirname + '/public/js'));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/sign_up', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/singUp.html'));
});

app.post('/sign_up', async (req, res) => {
  let newUser = new Users(req.body);
  await newUser.save();
  res.send('Usuario creoado con exito');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post('/login', async (req, res) => {
  let {email, password} = req.body;
  let user = await Users.findOne({email: email, password: password});

  if (user) {
    res.send(user);
  }
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Inicia el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor listo en el puerto ${app.get('port')}`);
});
