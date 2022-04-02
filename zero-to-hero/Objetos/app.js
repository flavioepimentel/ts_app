"use strict";
// => Exemplo type Objeto
const user = {
    name: 'user',
    email: 'someemail@email.com',
    age: 30,
    function: 'developer'
};
console.log(user);
// => Exemplo object com parâmetros de função 
function onboarding01(funcionario) {
    return 'Seja bem vindo' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Eu mesmo' }));
function onboarding02(pessoa) {
    return ('Seja bem vindo' +
        pessoa.job + ' ' + pessoa.nome);
}
console.log(onboarding02({ nome: 'Fulano', job: 'dev' }));
function onboarding03(pessoa) {
    return ('Seja bem vindo' +
        pessoa.job + ' ' + pessoa.nome);
}
console.log(onboarding03({ nome: 'Fulano', job: 'dev' }));
function onboarding04(pessoa) {
    return (pessoa.name + 'esse exemplo implementa o optional object' +
        'seu email e idade é opcional mas seu nome e função é obrigatório');
}
console.log(onboarding04({ name: 'Fulano', function: 'dev' }));
