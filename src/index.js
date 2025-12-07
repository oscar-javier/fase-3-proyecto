const fs = require('fs').promises;
const path = require('path');
const logger = require('./logger');

const DATA_FILE = path.join(__dirname, '..', 'data.txt');

async function writeData(text) {
  logger.info(`Escribiendo datos: ${text}`);
  await fs.appendFile(DATA_FILE, text + '\n', { encoding: 'utf8' });
  return true;
}

async function readData() {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf8');
    logger.info(`Leído del archivo: ${content.length} bytes`);
    return content;
  } catch (err) {
    if (err.code === 'ENOENT') {
      logger.warn('Archivo no existe, devolviendo cadena vacía');
      return '';
    }
    logger.error('Error leyendo archivo: ' + err.message);
    throw err;
  }
}

module.exports = { writeData, readData };
