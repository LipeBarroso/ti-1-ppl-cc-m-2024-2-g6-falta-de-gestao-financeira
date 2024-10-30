function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

function selectIcon(direction) {
    const icons = document.querySelectorAll('.icon-selector img');
    let current = Array.from(icons).findIndex(icon => icon.classList.contains('selected'));

    icons[current].classList.remove('selected');
    if (direction === 'next') {
        current = (current + 1) % icons.length;
    } else {
        current = (current - 1 + icons.length) % icons.length;
    }
    icons[current].classList.add('selected');
}

function cancel() {
    document.getElementById('metaForm').reset();
}

document.getElementById('metaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const tempo = document.getElementById('tempo').value;
    const iconeSelecionado = document.querySelector('.icon-selector img.selected').alt;

    alert(`Meta criada com sucesso!\nNome: ${nome}\nValor: ${valor}\nTempo: ${tempo}\nÍcone: ${iconeSelecionado}`);
    cancel();
});
