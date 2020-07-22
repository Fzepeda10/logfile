const fs = require('fs');
/**
 * Agregar "0" a la cadena
 * @param {string} VALOR Valor a anexar el 0.
 * @param {number} LONGITUD Longitud Necesaria
 * @returns {string} Cadena con 0 agregado.
 */
function agregarCero(VALOR, LONGITUD) {
    return `${VALOR}`.padStart(LONGITUD, 0);
}
/**
 * Obtener la Fecha Como Cadena.
 * @returns {string} Retorna fecha como string, ejemplo: "[2020-06-15 08:42:56]".
 */
function obtenerFechaString() {
    const fecha = new Date();
    const fechaString = "["
        + agregarCero(fecha.getFullYear(), 4) + '-'
        + agregarCero(fecha.getMonth() + 1, 2) + '-'
        + agregarCero(fecha.getDate(), 2) + ' '
        + agregarCero(fecha.getHours(), 2) + ':'
        + agregarCero(fecha.getMinutes(), 2) + ':'
        + agregarCero(fecha.getSeconds(), 2)
        + "]";
    return fechaString;
}
/**
 * Constructor del Log
 * @param {string} text Texto a Capturar.
 * @param {string} [file] Ruta & Nombre del archivo.
 */
function log_constructor(TEXTO, ARCHIVO) {
    const NOMBRE_ARCHIVO = ARCHIVO !== undefined ? ARCHIVO : 'default.log';
    const TEXTO_LOG = obtenerFechaString() + '\t' + TEXTO + '\r\n';

    fs.appendFile(NOMBRE_ARCHIVO, TEXTO_LOG, 'utf8', function (error) {
        if (error) {
            console.log(obtenerFechaString() + '\t' + error);
        }
    });
}
module.exports = log_constructor;
