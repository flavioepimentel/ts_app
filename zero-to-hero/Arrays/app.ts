//==================================================================//
// Manipulando arrays 

// Exemplo com []
let exemploColchete:string[] = ['item1','item2','item3','item4']
console.log(exemploColchete[0])

// Exemplo Array objects
let exemploArray:Array<string> = ['item1','item2','item3','item4']
console.log(exemploArray[3])

// Insirindo um elemento
console.log(exemploArray)
exemploArray.push('item5')
console.log(exemploArray)
// Verificando o cumprimento
console.log(exemploArray.length)

// Spread Operator
let listaNumber = [1,2,3,4,5]
listaNumber = [ ...listaNumber, 5,6,7,8,9,10]
console.log(listaNumber)

// Laço 
let arrayNumbers:number[]= new Array(1,2,3,4,5,6)
function pecorrendoListas(arrayNumbers:number[]) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i]);
    }    
}

pecorrendoListas(arrayNumbers)