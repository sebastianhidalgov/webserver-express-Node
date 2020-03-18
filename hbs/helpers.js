//helpers
const hbs = require('hbs');
require('./../hbs/helpers')
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('nombre', () => {
    return 'sebastian hidalgo'
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

        return palabras.join(' ');
    });
})