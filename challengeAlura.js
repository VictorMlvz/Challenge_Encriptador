/*function encriptadorPEETA(texto){
    let textoMinusculas = texto.toLowerCase();

    let texto1= textoMinusculas.replaceAll("e",'enter'); 
    let texto2= texto1.replaceAll("i",'imes');
    let texto3= texto2.replaceAll("a",'ai'); 
    let texto4= texto3.replaceAll("o",'ober');
    let textoEncriptado= texto4.replaceAll("u",'ufat');

    return(textoEncriptado)}*/

/*function desencriptadorPEETA(texto){
    let textoMinusculas = texto.toLowerCase();

    let texto1= textoMinusculas.replaceAll("enter",'e');
    let texto2= texto1.replaceAll("imes",'i');
    let texto3= texto2.replaceAll("ai",'a');
    let texto4= texto3.replaceAll("ober",'o');
    let textoDesencriptado= texto4.replaceAll("ufat",'u');

    return(textoDesencriptado);}*/

function borrar(){
    document.getElementById('texto_var1').innerHTML='Bienvenido!';
    document.getElementById('texto_var2').innerHTML='Ingresa un texto que desees encriptar o desencriptar c:';
    formulario.reset();
}
function copiar(){
    let textoACopiar = document.getElementById('texto_var2').textContent;
    navigator.clipboard.writeText(textoACopiar);
    document.getElementById('texto_var1').innerHTML='Copiado!'
}

function encriptador(){
    let texto = document.getElementById('input_area').value;
    if(texto==''){
        document.getElementById('texto_var1').innerHTML='No hemos encontrado ningun mensaje...';
        document.getElementById('texto_var2').innerHTML='Por favor, ingresa el texto que deseas encriptar o desencriptar.';

    } else{
        texto=texto.toLowerCase();

        const keys={'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};
        for(i in keys){ texto=texto.replaceAll(`${i}`,`${keys[i]}`); }

        document.getElementById('texto_var1').innerHTML='El texto encriptado es el siguiente:';
        document.getElementById('texto_var2').innerHTML=texto;
    }
}

function desencriptador(){
    let texto = document.getElementById('input_area').value;
    if(texto==''){
        document.getElementById('texto_var1').innerHTML='No hemos encontrado ningun mensaje...';
        document.getElementById('texto_var2').innerHTML='Por favor, ingresa el texto que deseas encriptar o desencriptar.';

    } else{
        const keys={'enter':'e','imes':'i','ai':'a','ober':'o','ufat':'u'};
        texto=texto.toLowerCase();
        for(i in keys){ texto=texto.replaceAll(`${i}`,`${keys[i]}`); }

        document.getElementById('texto_var1').innerHTML='El texto desencriptado es el siguiente:';
        document.getElementById('texto_var2').innerHTML=texto;
    }
} 
