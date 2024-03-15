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
});

document.getElementById('opciones').addEventListener('click', function() {
    var resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';
    var opcionSeleccionada = document.getElementById('opciones').value;
    var numeroInput = parseInt(document.getElementById('numero').value);
});



