const secretText = document.getElementById('secret-text');
let typedText = '';

document.addEventListener('keydown', (event) => {
    typedText += event.key.toLowerCase();
    const targetText = 'i am about to die';

    if (typedText.endsWith(targetText)) {
        secretText.textContent = 'ufyu nf uif xpse: bmpipnpsb';
    }
});

