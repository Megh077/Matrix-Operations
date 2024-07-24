function generateMatrices() {
    const row = document.getElementById('row').value;
    const column = document.getElementById('column').value;

    if(!(row)){
        alert("Please enter the number of rows.")
    }
    else if(!(column)){
        alert("Please enter the number of columns.")
    }

    else if (isNaN(row) || row <= 0 || isNaN(column) || column <= 0) {
        alert("Please enter valid positive integers for row and column.")
        return;
    }
    else if(row>10||column>10){
        alert("The number of rows and columns should be within 10");
        return;
    }
    

    const inputMatrices = document.getElementById('input-matrices');
    inputMatrices.innerHTML = ''; 
    const eachMatrix1 = document.createElement('div');
        eachMatrix1.className = 'eachMatrix1';
        eachMatrix1.id = `eachMatrix1`;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = `eachMatrix1-${i}-${j}`;
                eachMatrix1.appendChild(input);
            }
            eachMatrix1.appendChild(document.createElement('br'));
        }
        inputMatrices.appendChild(eachMatrix1);
        const eachMatrix2 = document.createElement('div');
        eachMatrix2.className = 'eachMatrix2';
        eachMatrix2.id = `eachMatrix2`;
        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = `eachMatrix2-${i}-${j}`;
                eachMatrix2.appendChild(input);
            }
            eachMatrix2.appendChild(document.createElement('br'));
        }
        inputMatrices.appendChild(eachMatrix2);
    
    const calculateMatrix = document.getElementById('calculate-matrix');
    calculateMatrix.style.display = 'block';
}

function mulMatrix() {
    const row = document.getElementById('row').value;
    const column = document.getElementById('column').value;
    const resultMatrix = [];

    for (let i = 0; i < row; i++) {
        const rowResult = [];
        for (let j = 0; j < row; j++) { 
            let sum = 0;
            for (let k = 0; k < column; k++) { 
                const value1 = parseInt(document.getElementById(`eachMatrix1-${i}-${k}`).value);
                const value2 = parseInt(document.getElementById(`eachMatrix2-${k}-${j}`).value);
                if (isNaN(value1) || isNaN(value2)) {
                    alert("Please enter valid integers for all matrix values.");
                    return;
                }
                sum += value1 * value2;
            }
            rowResult.push(sum);
        }
        resultMatrix.push(rowResult);
    }

    displayResult(resultMatrix);
}


function displayResult(matrix) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    const resultDiv = document.createElement('div');
    resultDiv.className = 'resultMatrix';
    resultDiv.id = 'resultMatrix';
    matrix.forEach(row => {
        row.forEach(value => {
            const input = document.createElement('input');
            input.type = 'number';
            input.value = value;
            input.disabled = true;
            resultDiv.appendChild(input);
        });
        resultDiv.appendChild(document.createElement('br'));
    });
    resultContainer.appendChild(resultDiv);
}


