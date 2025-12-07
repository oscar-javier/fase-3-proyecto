const fs = require('fs');
const path = require('path');
const { writeData, readData } = require('../src/index');

const DATA_FILE = path.join(__dirname, '..', 'data.txt');

beforeEach(() => {
  if (fs.existsSync(DATA_FILE)) fs.unlinkSync(DATA_FILE);
});

test('writeData y readData funcionan', async () => {
  await writeData('hola mundo');
  const content = await readData();
  expect(content).toContain('hola mundo');
});

test('readData devuelve string vacío si no existe', async () => {
  const content = await readData();
  expect(content).toBe('');
});
