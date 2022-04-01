// => Exemplo type Objeto
const user = {
    name: 'user',
    email: 'someemail@email.com',
    age: 30,
    function: 'developer'
}
console.log(user)

// => Exemplo object com parâmetros de função 
function onboarding01 (funcionario:{nome: string}){
    return 'Seja bem vindo' + funcionario.nome
}
console.log(onboarding01({nome:'Eu mesmo'}))

// => Exemplo object nomeados
interface Pessoa{
    nome: string;
    job: string;
}

function onboarding02(pessoa:Pessoa) {
    return ('Seja bem vindo' + 
    pessoa.job + ' ' + pessoa.nome)    
}

console.log(onboarding02({nome:'Fulano', job:'dev'}))

// => Exemplo object como type alias
type Pessoa03= {
    nome: string;
    job: string;
}

function onboarding03(pessoa:Pessoa03) {
    return ('Seja bem vindo' + 
    pessoa.job + ' ' + pessoa.nome)    
}

console.log(onboarding03({nome:'Fulano', job:'dev'}))

// => Exemplo implementando object com o optional object
interface Pessoa04 {
    name: string;
    email?: string;
    age?: number;
    function: string;

}

function onboarding04(pessoa:Pessoa04) {
    return (
        pessoa.name + 'esse exemplo implementa o optional object' +
        'seu email e idade é opcional mas seu nome e função é obrigatório'
    )
}

console.log(onboarding04({ name:'Fulano', function:'dev' }))

