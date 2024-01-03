function multiplyMatrices() {
    const matrixA = parseMatrixInput(document.getElementById('matrixA').value);
    const matrixB = parseMatrixInput(document.getElementById('matrixB').value);

    if (!validateMatrices(matrixA, matrixB)) {
        alert('Invalid matrices for multiplication!');
        return;
    }

    const resultMatrix = multiply(matrixA, matrixB);
    displayResult(resultMatrix);
}

function parseMatrixInput(input) {
    return input.trim().split('\n').map(row => row.split(' ').map(Number));
}

function validateMatrices(matrixA, matrixB) {
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;

    return colsA === rowsB;
}
function multiplyMatrices() {
    const matrixA = parseMatrixInput(document.getElementById('matrixA').value);
    const matrixB = parseMatrixInput(document.getElementById('matrixB').value);

    if (!validateMatrices(matrixA, matrixB)) {
        alert('Invalid matrices for multiplication!');
        return;
    }

    const resultMatrix = multiply(matrixA, matrixB);
    displayResult(resultMatrix);
}

function parseMatrixInput(input) {
    return input.trim().split('\n').map(row => row.split(' ').map(Number));
}

function validateMatrices(matrixA, matrixB) {
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;

    return colsA === rowsB;
}

function multiplyMatrices() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const matrixA = parseMatrixInput(document.getElementById('matrixA').value, rowsA, colsA);

    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);
    const matrixB = parseMatrixInput(document.getElementById('matrixB').value, rowsB, colsB);

    if (!validateMatrices(matrixA, matrixB)) {
        alert('Invalid matrices for multiplication!');
        return;
    }

    const resultMatrix = multiply(matrixA, matrixB);
    displayResult(resultMatrix);
}

function parseMatrixInput(input, rows, cols) {
    const values = input.trim().split(/\s+/).map(Number);

    if (values.length !== rows * cols) {
        alert('Invalid number of elements in the matrix!');
        return [];
    }

    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(values.slice(i * cols, (i + 1) * cols));
    }

    return matrix;
}

function validateMatrices(matrixA, matrixB) {
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;

    return colsA === rowsB;
}

function multiply(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const resultMatrix = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return resultMatrix;
}

function displayResult(resultMatrix) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Result:</h2>';

    const resultTable = document.createElement('table');

    resultMatrix.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });

        resultTable.appendChild(tr);
    });

    resultDiv.appendChild(resultTable);
}


