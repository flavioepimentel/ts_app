// Tuplas
let firstTupla: [string, string, number, number];
firstTupla = ['uma string', 'duas strings', 1, 2]
console.log(firstTupla)

// Tuplas com labels
let labelTupla: [nome:string, idade:number, trabalho:string] = ['User', 30, 'Desenvolvedor']
console.log(labelTupla[0])

// Tuplas homogêneas com Spread Operator
let listaFrutas:[string, ...string[]] = ['laranja', 'maçã', 'pessego', 'ameixa']
console.log(...listaFrutas)

// Lista Heterogênea
let listaFrutas2:[number, boolean, ...string[]] = [8, true, ...listaFrutas]
console.log(...listaFrutas2)

// Tuplas em funções
function funcTupla (nomes:string[], idades:number[]){
    return [...nomes, ...idades]
}

let response = funcTupla(['user1', 'user2'],[25, 45])
console.log(response)