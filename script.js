document.getElementById('elCuadro').addEventListener('click', function() {
    this.style.borderColor = this.style.borderColor === 'blue' ? 'green' : 'blue';
});

function calcularStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    const totalStickers = sticker1 + sticker2 + sticker3;

    const resultado = document.getElementById('resultado');

    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultado.textContent = "Llevas demasiados stickers.";
    }
}

function verificarContraseña() {
    const digit1 = document.getElementById('primernumero').value;
    const digit2 = document.getElementById('segundonumero').value;
    const digit3 = document.getElementById('tercernumero').value;

    const password = digit1 + digit2 + digit3;

    const resultado = document.getElementById('resultado-contraseña');

    if (password === '911') {
        resultado.textContent = "password 1 correcto";
    } else if (password === '714') {
        resultado.textContent = "password 2 correcto";
    } else {
        resultado.textContent = "password incorrecto";
    }
}
