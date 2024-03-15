document.getElementById('opciones').addEventListener('change', function() {
    var inputContainer = document.getElementById('inputContainer');
    if (this.value === 'NMpares' || this.value === 'NMimpares') {
        inputContainer.classList.remove('hidden');
    } else {
        inputContainer.classList.add('hidden');
    }
});




