// => Exemplo implementando object com readonly
interface Pessoa05 {
    name: string;
    readonly email: string;
    age?: number;
    function: string;

}

function onboarding05(pessoa:Pessoa05) {
    return (
        pessoa.name + 'esse exemplo implementa o readonly no email' + pessoa.email
    )
}

console.log(onboarding05({ name:'Fulano', function:'dev', email:'user@email.com' }))


// => Exemplo implementando metódo de interceção
interface Birds{
    description:string
}
interface AnimaisAquaticos {
    description:string
}

type Pinguim = Birds & AnimaisAquaticos;


// => Exemplo implementando herança em objects
interface Animal{
    dominio?: string,
    reino?: string,
    filo?: string,
    subfilo?:string,
    superclasse?: string,
    classe?:string,

} 
interface Bird extends Animal {
    ordem?:string,
    especie?:string,
    genero?:string
    dieta:string,
}
interface PinguimRei extends Bird, Animal{
    name: string,
    subespecie:string,
    altura:number,
    idade: number,
    sexo: string,
}

const pinguimRei: PinguimRei = {
    name: 'Tux',
    subespecie: 'Pinguim-Rei',
    altura: 0.9,
    idade: 2,
    sexo:'M',
    dieta:'Peixe',
    dominio: 'Eukaryota',
    reino:'Animmalia',
    filo:'Chordata',
    classe:'Aves',
    ordem:'Spheniscidae',
    genero:'Aptenodytes',
    especie:'Aptenodytes Patagonicus'
}
console.log(pinguimRei)