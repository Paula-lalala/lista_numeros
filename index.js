document.getElementById('opciones').addEventListener('change', function() {
    var inputContainer = document.getElementById('inputContainer');
    if (this.value === 'NMpares' || this.value === 'NMimpares') {
        inputContainer.classList.remove('hidden');
    } else {
        inputContainer.classList.add('hidden');
    }
});

function mostrarLista(opcionSeleccionada) {
    var resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';

    var numeros = Array.from({ length: 200 }, (_, i) => i + 1);

    var numerosFiltrados = [];
    var numeroInput;

    if (opcionSeleccionada === 'pares' || opcionSeleccionada === 'impares') {
        numerosFiltrados = numeros.filter(function(numero) {
            return opcionSeleccionada === 'pares' ? numero % 2 === 0 : numero % 2 !== 0;
        });
    } else if (opcionSeleccionada === 'NMpares' || opcionSeleccionada === 'NMimpares') {
        numeroInput = parseInt(document.getElementById('numero').value);
        numerosFiltrados = numeros.filter(function(numero) {
            return opcionSeleccionada === 'NMpares' ? numero > numeroInput && numero % 2 === 0 : numero > numeroInput && numero % 2 !== 0;
        });
    }
    numerosFiltrados.sort(function(a, b) {
        return b - a;
    });
    var elementosLI = numerosFiltrados.map(function(numero) {
        var li = document.createElement('li');
        li.textContent = numero;
        return li;
    });
    resultadoList.append(...elementosLI);
}



