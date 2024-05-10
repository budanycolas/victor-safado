// alert('Mahara acordou')
var Mahara_presa = '';
var texto = document.querySelector('span');

while(Mahara_presa == ''){ // || Mahara_presa == null
    Mahara_presa = prompt('Quantas vezes a Mahara ja foi presa?');

}

if (Mahara_presa == null){
    texto.textContent = 0;
} else {
    texto.textContent = Mahara_presa;
}
