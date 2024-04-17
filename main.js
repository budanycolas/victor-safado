 //alert('bom dia cachorrada!!');
 //alert('NYCOLAS É BROXA!!!');

 var nomeUsuario = '';


 var texto = document.querySelector('span');

 



  while(nomeUsuario == '')   {//|| nomeUsuario == null
    var nomeUsuario = prompt('qual seu vulgo??');
 }
 
    if (nomeUsuario == null){
        texto.textContent = 'usuario';
    }else {texto.textContent = nomeUsuario;
    }



 