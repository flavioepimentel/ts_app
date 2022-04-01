// Type Annotation


// => String
let msg: string = "Olá"
console.log(msg)

// => Arrays
let numerosArrays: number[] = [1,2,3,4,5,6,7]
console.log(numerosArrays)

// => Objetos
let carros: {
    nome: string;
    ano: number;
    preco: number;  
}
    // Instacia
carros = {nome:'nomeCarro', ano:2022, preco:60000}
console.log(carros)

// Function
function multiplicarNumero(num1:number, num2:number){
    return num1 * num2
}
console.log(multiplicarNumero(5,10))

// boolean
let tarefaConcluida:boolean = true
let tarefaPendente:boolean = false
console.log(tarefaConcluida)
console.log(tarefaPendente)

// number
let num1:number = 23.0  //float
let num2:number = 0x78cf; // hexadecimal
let num3:number = 0o577; // octacimal
let num4:number = 0b11001; // binario
console.log(num1, num2, num3, num4)

// bigint disponível apenas a partir do ES2020
// let big1:bigint = 9889008999098776544n;
