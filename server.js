
/////////////////////////////////////////////////
///////////////111111111111111111////////////////
////////Se crea el servidor hola mundo///////////
const http = require('http');
const fs = require('fs');

const express = require('express');
const application = express();
const port = 3022; // Aqui elegimos un puerto para la aplicacion

application.get('/', (req, res) => {
  res.send('Hola mundo!');
});

application.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});



//////////////////////////////////////////////////
////////////22222222222222222222//////////////////
////222///Se crea el servidor sincrono////////////

// Primero hay que crear el servidor sincrono, 
const server = http.createServer((request, response) => {


    // Aqui se lee por medio de la funcion readFileSync, el archivo, sincronicamente
    try {
        const data = fs.readFileSync('message.txt', 'utf8');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(data);
    } catch (err) {
        console.error('Error leyendo el archivo', err);
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Error del servidor');
    }
});

// Empieza a funcionar en el puerto 3021
server.listen(3021, () => {
    console.log('El servidor esta escuchando en el puerto 3021');
});



/////////////////////////////////////////////////////
///////3333333333333333333333333333333333333333333333
/////Ahora se crea el servidor asincrono//////////////

// Se crea la arrow function requestHandler
const requestHandler = (request, response) => {

  // Aqui se utiliza un setTimeout para simular la asincronicidad del servidor
  setTimeout(() => {
    // Se lee un mensaje asincronamente para demostrar el funcionamiento, 
    //es decir que si se recibe bien la info, se manda el mensaje.
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(data);
      }
    });
  }, 2000); // Aqui hay un retraso de dos segundos
};

// Se crea el servidor
const server_asincrono = http.createServer(requestHandler);

//Se utiliza el puerto 3025, porque el 3021 pos ya lo ganó el otro
server_asincrono.listen(3025, (err) => {
  if (err) {
    console.error('Error inicializando el servidor:', err);
  } else {
    console.log('El servidor esta escuchando en el puerto 3025');
  }
});