// alert('nycolas moscou')
var nycolas_perdeu tudo = '';
var texto = document.querySelector('span');

while(nycolas_perdeu == ''){ // || nycolas_perdeu == null
    nycolas_perdeu = prompt('Quantas vezes o nycolas perdeu?');

}

if (nycolas_perdeu == null){
    texto.textContent = 1000000;
} else {
    texto.textContent = nycolas_perdeu;
}
