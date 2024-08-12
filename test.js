const fs = require('fs');
const path = require('path');

test('Debe contener "Hola Mundo"', () => {
    const filePath = path.join(__dirname, 'index.html');
    const data = fs.readFileSync(filePath, 'utf8');
    expect(data).toContain('Hola Mundo');
});
