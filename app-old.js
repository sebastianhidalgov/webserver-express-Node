const http = require('http');


http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nomnbre: 'Sebastian',
        edad: 26,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    /*     res.write('Hola Mundo'); */

    res.end();
})


.listen(3000);

console.log('Escuchando el puerto 3000');