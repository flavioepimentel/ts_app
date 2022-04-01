
"use strict";
// Type Annotation
// => String
let msg = "Olá";
console.log(msg);

// => Arrays
let numerosArrays = [1, 2, 3, 4, 5, 6, 7];
console.log(numerosArrays);

// => Objetos
let carros;

// Instacia
carros = { nome: 'nomeCarro', ano: 2022, preco: 60000 };
console.log(carros);

// Function
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(5, 10));

// boolean
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);

// number
let num1 = 23.0; //float
let num2 = 0x78cf; // hexadecimal
let num3 = 0o577; // octacimal
let num4 = 0b11001; // binario
console.log(num1, num2, num3, num4);

// bigint disponível apenas a partir do ES2020
// let big1:bigint = 9889008999098776544n;


//==================================================================//
// Manipulando arrays 
// Exemplo com []
let exemploColchete = ['item1', 'item2', 'item3', 'item4'];
console.log(exemploColchete[0]);

// Exemplo Array objects
let exemploArray = ['item1', 'item2', 'item3', 'item4'];
console.log(exemploArray[3]);

// Insirindo um elemento
console.log(exemploArray);
exemploArray.push('item5');
console.log(exemploArray);

// Verificando o cumprimento
console.log(exemploArray.length);

// Spread Operator
let listaNumber = [1, 2, 3, 4, 5];
listaNumber = [...listaNumber, 5, 6, 7, 8, 9, 10];
console.log(listaNumber);

// Laço 
let arrayNumbers = new Array(1, 2, 3, 4, 5, 6);
function pecorrendoListas(arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i]);
    }
}
pecorrendoListas(arrayNumbers);

// Tuplas
let firstTupla;
firstTupla = ['uma string', 'duas strings', 1, 2];
console.log(firstTupla);

// Tuplas com labels
let labelTupla = ['User', 30, 'Desenvolvedor'];
console.log(labelTupla[0]);

// Tuplas homogêneas com Spread Operator
let listaFrutas = ['laranja', 'maçã', 'pessego', 'ameixa'];
console.log(...listaFrutas);

// Lista Heterogênea
let listaFrutas2 = [8, true, ...listaFrutas];
console.log(...listaFrutas2);

// Tuplas em funções
function funcTupla(nomes, idades) {
    return [...nomes, ...idades];
}
let response = funcTupla(['user1', 'user2'], [25, 45]);
console.log(response);
