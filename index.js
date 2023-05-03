const fs = require('fs');
const os = require('os');
const path = require('path');

const mountPath = '\\\\mounts\\test';
const fileName = 'test.txt';
const filePath = path.join(mountPath, fileName);

fs.writeFile(path.join(filePath, 'test.txt'), 'Hello, world!', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('File created successfully.');
    }
});