document.getElementById('opciones').addEventListener('change', function() {
    var inputContainer = document.getElementById('inputContainer');
    if (this.value === 'NMpares' || this.value === 'NMimpares') {
        inputContainer.classList.remove('hidden');
    } else {
        inputContainer.classList.add('hidden');
    }
});

document.getElementById('verBtn').addEventListener('click', function() {
    var resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';
    var opcionSeleccionada = document.getElementById('opciones').value;
    var numeroInput = parseInt(document.getElementById('numero').value);

    if (numeroInput < 1 || numeroInput >200 || isNaN(numeroInput)) {
        alert("Recuerde que la lista solo recorre del 1-200, si puso un número inferior a 1 o cercano al 200 según su opción no se mostrará la lista al estar al final de esta");
        return;
    } 
     funcion_ver(opcionSeleccionada, numeroInput, resultadoList);
});


function funcion_ver(opcionSeleccionada, numeroInput, resultadoList) {
    for (var i = 1; i <= 200; i++) {
        if ((opcionSeleccionada === 'pares' && i % 2 === 0) ||
            (opcionSeleccionada === 'impares' && i % 2 !== 0)) {
            var li = document.createElement('li');
            li.textContent = i;
            resultadoList.appendChild(li);
             } else if ((opcionSeleccionada === 'NMpares' && i % 2 === 0 && i > numeroInput && numeroInput<=199) ||
            (opcionSeleccionada === 'NMimpares' && i % 2 !== 0 && i > numeroInput && numeroInput<=198)) {
            var li = document.createElement('li');
            li.textContent = i;
            resultadoList.appendChild(li);
        } else if((opcionSeleccionada === 'NMpares' && numeroInput>199) || 
        (opcionSeleccionada === 'NMimpares' && numeroInput>198)){
            alert("Recuerde que la lista solo recorre del 1-200, si puso un número inferior a 1 o cercano al 200 según su opción no se mostrará la lista al estar al final de esta");
        return;
        }
    }
}
document.getElementById('opciones').addEventListener('click', function() {
    var resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';
    var opcionSeleccionada = document.getElementById('opciones').value;
    var numeroInput = parseInt(document.getElementById('numero').value);
});



