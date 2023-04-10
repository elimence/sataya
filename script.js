const secretText = document.getElementById('secret-text');
let typedText = '';

document.addEventListener('keydown', (event) => {
    typedText += event.key.toLowerCase();
    const targetText = 'iamabouttodie';

    if (typedText.endsWith(targetText)) {
        secretText.textContent = 'ufyu nf uif xpse: bmpipnpsb';
    }
});

