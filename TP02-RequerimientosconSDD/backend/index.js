const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! El contenedor de Node.js con Express está funcionando correctamente.');
});

app.listen(port, () => {
  console.log(`Aplicación de prueba escuchando en el puerto ${port}`);
});