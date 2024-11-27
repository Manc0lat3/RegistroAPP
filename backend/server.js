const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;
const moment = require('moment-timezone');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aula_manager'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente!');
  });

app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT id, nombre, email, rol FROM usuarios WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al iniciar sesión' });
    }

    if (results.length > 0) {
      const usuario = results[0];
      res.json({
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.email,
        rol: usuario.rol,
      });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  });
});

  app.post('/api/registro', (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(query, [nombre, correo, contraseña], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario:', err);
        return res.status(500).json({ error: 'Error al registrar el usuario' });
      }
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    });
  });

  app.post('/api/reservas', (req, res) => {
    const { idusuario, sala, fecha, horaini, horafin } = req.body;

    const fechaChilena = moment.tz(`${fecha} ${horaini}`, 'America/Santiago').toISOString();
    const fechaFinChilena = moment.tz(`${fecha} ${horafin}`, 'America/Santiago').toISOString();

    const query = 'INSERT INTO reservas (idusuario, sala, fecha, horaini, horafin) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [idusuario, sala, fecha, horaini, horafin], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al crear la reserva' });
        }
        res.status(201).json({ message: 'Reserva creada con éxito' });
    });
});

  app.get('/api/reservas/:idusuario', (req, res) => {
    const { idusuario } = req.params;
    const query = 'SELECT * FROM reservas WHERE idusuario = ?';
    db.query(query, [idusuario], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener las reservas' });
        }
        res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
