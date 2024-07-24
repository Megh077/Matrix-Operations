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
    for (let m = 1; m <= 2; m++) {
        const eachMatrix = document.createElement('div');
        eachMatrix.className = 'eachMatrix';
        eachMatrix.id = `eachMatrix${m}`;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = `eachMatrix${m}-${i}-${j}`;
                eachMatrix.appendChild(input);
            }
            eachMatrix.appendChild(document.createElement('br'));
        }
        inputMatrices.appendChild(eachMatrix);
    }
    const calculateMatrix = document.getElementById('calculate-matrix');
    calculateMatrix.style.display = 'block';
}

function addMatrix() {
    const row = document.getElementById('row').value;
    const column = document.getElementById('column').value;
    const resultMatrix = [];

    for (let i = 0; i < row; i++) {
        const rowResult = [];
        for (let j = 0; j < column; j++) {
            let sum = 0;
            for (let m = 1; m <= 2; m++) {
                const input = document.getElementById(`eachMatrix${m}-${i}-${j}`).value;
                const value = parseInt(input);
                if (isNaN(value)) {
                    alert("Please enter valid integers for all matrix values.");
                    return;
                }

                sum += value;
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


