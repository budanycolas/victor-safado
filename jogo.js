let numeroSecreto = Math.random() * 10;

let chute = prompt('Ecolha um número entre 0 a 10');

while(chute == ''){

chute = prompt('Escolha um número entre 0 a 10.');
}

while(chute == null || chute !=numeroSecreto){
 alert("tente denovo vh 7 ");
 chute = prompt('Escolha um número entre 0 a 10.');
}
if(numeroSecreto == chute){
    alert('Boa cpx');
    console.log('Nice');
} else{
    alert('errou cpx');
    console.log('paia');
}













