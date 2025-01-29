let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

 function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Asertaste el número en ${intentos} ${(intentos===1)?' vez':' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
    }else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //verificar si ya sorteamos todos los números
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        //document.querySelector('#x|intentar').setAttribute('disabled','true');
    }else{
        //si el número generado está incluido en la lista, hacemos una operación
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            //guardamos el nuevo numero
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}: `);
    //generar el número aleatorio
    numeroSecreto=generarNumeroSecreto();
    //inicializar el número de intentos
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la Caja de texto
    limpiarCaja();
    //indicar mensaje de intervalos de números al inicio
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales(); 
/* ------------------------------------------------------------------------------------------------------------ */
/* function calcularPromedio(nota1, nota2, nota3, nota4){
    return (nota1+nota2+nota3+nota4)/4;
}
function verificarAprobacion(nota){
    if (nota>5){
        alert('Estás aprobado');
    }else{
        alert('Estás desaprobado');
    }
    return
} */

/* function holaMundo(quien){
    console.log(`Hola ${quien}!`);
}

function cuadradoDeNumero(numero){
    return numero*numero;
} */


//holaMundo('Mundo');
//console.log(cuadradoDeNumero(numeroSecreto));
/* let nota=calcularPromedio(7,6,3,5);
verificarAprobacion(nota); */

/* function calculaIMC(peso, altura){
    return peso/(altura**2);
}
//console.log(calculaIMC(70, 1.67));

function calculaFactorial(numero){
    let factorial=numero;

    if (numero==0 || numero==1) {
        return 1;
    }else{
        for (let i=1;i<=numero;i++) {
            if (i>0){
                factorial=factorial*(numero-i);
                console.log(factorial);
            }
        }
    return factorial;
    }
}
//console.log(calculaFactorial(2));

function tablaDeMultiplicar(numero){
    let resultado=0;
    for (let i=1;i<=10;i++){
        resultado=numero*i;
        console.log(resultado);
    }
}

tablaDeMultiplicar(100); 

let listaVacia=[];
let lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let listaNumeros=[1,2,3,4,5];
lenguagesDeProgramacion.push('Java','Ruby', 'GoLang', 'Pascal');

function muestraContenidoLista(){
    for (let i=lenguagesDeProgramacion.length-1; i>=0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}

function calculaPromedio(){
    let promedio=0;
    for (let j=0; j<=listaNumeros.length-1; j++){
        promedio=promedio+listaNumeros[j]
    }
    return (promedio/listaNumeros.length)
}

function muestraNumeroGrandePequeno(){
    let numeroMayor=0;
    let numeroMenor=2;
    for (let k=0; k<=listaNumeros.length-1; k++){
        if (listaNumeros[k]>numeroMayor){
            numeroMayor=listaNumeros[k];
        }
        if (listaNumeros[k]<numeroMenor){
            numeroMenor=listaNumeros[k];
        }
    }
    return (`${numeroMenor},  ${numeroMayor}`);
}

function calculaSuma(){
    let promedio=0;
    for (let j=0; j<=listaNumeros.length-1; j++){
        promedio=promedio+listaNumeros[j]
    }
    return (promedio)
}

function posicionParametro(parametro){
    //console.log(parametro);
    let existeParametro=false;
    let indiceParametro=0;
    let i=0;
    while (i <=listaNumeros.length-1) {
        // console.log(listaNumeros[i]);
        if (listaNumeros[i]==parametro){
            existeParametro=true;
            console.log(existeParametro);
            indiceParametro=i;
            console.log(indiceParametro);
            break;
        }else{
            existeParametro=false;
        }
        i++;
    }
    if (existeParametro){
        return indiceParametro;
    }else {
        return -1;
    }
}

let lista1=[1,2];
let lista2=[7,4];

function concatenaListas(l1, l2){
    let l3=[];
    //for (let i=0; i<=l1.length-1; i++){
        return l3.concat(l1,l2);
    //}
}

function cuadradoNumerosLista(l1){
    let listaCuadrado=[];
    for (let i=0; i<=l1.length-1; i++){
        listaCuadrado[i]=l1[i]*l1[i];
    }
    return listaCuadrado;
}

//muestraContenidoLista();
//console.log(calculaPromedio());
//console.log(muestraNumeroGrandePequeno());
//console.log(lenguagesDeProgramacion);
//console.log(calculaSuma());
//console.log(posicionParametro(5));
//console.log(concatenaListas(lista1, lista2));
console.log(cuadradoNumerosLista(lista2));
*/