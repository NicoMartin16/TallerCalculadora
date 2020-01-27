var resultado = document.querySelector('#txtResultado');
var uno = document.querySelector("#uno");
var dos = document.querySelector("#dos");
var tres = document.querySelector("#tres");
var cuatro = document.querySelector("#cuatro");
var cinco = document.querySelector("#cinco");
var seis = document.querySelector("#seis");
var siete = document.querySelector("#siete");
var ocho = document.querySelector("#ocho");
var nueve = document.querySelector("#nueve");
var cero = document.querySelector("#cero");

var suma = document.querySelector('#sumar');
var resta = document.querySelector('#restar');
var multiplicacion = document.querySelector('#multiplicar');
var division = document.querySelector('#dividir');
var igual = document.querySelector('#igual');

var numero1;
var numero2;
var operacion;
resultado.value = " ";

uno.addEventListener('click', function(){
    resultado.value = resultado.value + "1";
});
dos.addEventListener('click', function(){
    resultado.value = resultado.value + "2";
});
tres.addEventListener('click', function(){
    resultado.value = resultado.value + "3";
});
cuatro.addEventListener('click', function(){
    resultado.value = resultado.value + "4";
});
cinco.addEventListener('click', function(){
    
    resultado.value = resultado.value + "5";
});
seis.addEventListener('click', function(){
    resultado.value = resultado.value + "6";
});
siete.addEventListener('click', function(){
    resultado.value = resultado.value + "7";
});
ocho.addEventListener('click', function(){
    resultado.value = resultado.value + "8";
});
nueve.addEventListener('click', function(){
    resultado.value = resultado.value + "9";
});
cero.addEventListener('click', function(){
    resultado.value = resultado.value + "0";
});

suma.addEventListener('click', function(){
    numero1 = parseInt(resultado.value);
    console.log(numero1);
    operacion = '+';
    resultado.value = " ";
});

resta.addEventListener('click', function(){
    numero1 = parseInt(resultado.value);
    console.log(numero1);
    operacion = '-';
    resultado.value = " ";
});

multiplicacion.addEventListener('click', function(){
    numero1 = parseInt(resultado.value);
    console.log(numero1);
    operacion = '*';
    resultado.value = " ";
});

division.addEventListener('click', function(){
    numero1 = parseInt(resultado.value);
    console.log(numero1);
    operacion = '/';
    resultado.value = " ";
});

igual.addEventListener('click', function(){
    numero2 = parseInt(resultado.value);
    resultado.value = " ";
    operar();
});

function reset(){
    resultado.value = " ";
    numero1 = 0;
    numero2 = 0;
    operacion = "";
}

function operar(){
    var rest = 0;
    switch(operacion){
        case '+':
            rest = numero1 + numero2;
            break;
        case '-':
            rest = numero1 - numero2;
            break;
        case '*':
            rest = numero1 * numero2;
            break;
        case '/':
            rest = numero1 / numero2;
            break; 
    }
    reset();
    resultado.value = rest;
}


