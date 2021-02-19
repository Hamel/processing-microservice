const express = require('express');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();
const PORT = 5004;

const filePath = './fileInputs/content_metadata.xlsx';
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const content_metadata = [];
let metadata = {};

for (let cell in workbook) {
    const cellAsString = cell.toString();

    if (
        cellAsString[1] !== 'r' 
        && 
        cellAsString !== 'm' 
        && 
        cellAsString[1] > 1) {

            if (cellAsString[0] === 'Column_heading') {
                metadata.ColumnHeading = worksheet[cell].v;
            }
            if (cellAsString[0] === 'Comment') {
                metadata.Comment = worksheet[cell].v;
                metadata.push(post);
                metadata = {};
            }

    }
}
console.log(content_metadata)

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})