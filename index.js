document.getElementById('opciones').addEventListener('change', function() {
    var inputContainer = document.getElementById('inputContainer');
    var opcionSeleccionada = this.value;

    if (opcionSeleccionada === 'pares' || opcionSeleccionada === 'impares') {
        inputContainer.classList.add('hidden');
        mostrarLista(opcionSeleccionada);
        document.getElementById('listaSection').style.display = 'block'; // Mostrar el contenedor de la lista
    } else if (opcionSeleccionada === 'NMpares' || opcionSeleccionada === 'NMimpares') {
        inputContainer.classList.remove('hidden');
    } else {
        inputContainer.classList.add('hidden');
        document.getElementById('listaSection').style.display = 'none'; // Ocultar el contenedor de la lista
    }
});

// Función para mostrar el modal
function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Botón para cerrar el modal
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Botón "Aceptar"
    var acceptButton = document.getElementById('accept-button');
    acceptButton.addEventListener('click', function() {
        modal.style.display = 'none';
        location.reload(); // Refrescar la página
    });

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.getElementById('verBtn').addEventListener('click', function() {
    var opcionSeleccionada = document.getElementById('opciones').value;
    var numeroInput = parseInt(document.getElementById('numero').value);
    
    if (isNaN(numeroInput) || (opcionSeleccionada ==='NMpares' && numeroInput>199) || (opcionSeleccionada ==='NMimpares' && numeroInput >198)
     || numeroInput < 1) {
        showModal();
    } else {
        mostrarLista(opcionSeleccionada);
        document.getElementById('listaSection').style.display = 'block'; // Mostrar el contenedor de la lista
    }
});

// Función para mostrar la lista
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


