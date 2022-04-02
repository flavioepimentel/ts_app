"use strict";
function onboarding05(pessoa) {
    return (pessoa.name + 'esse exemplo implementa o readonly no email' + pessoa.email);
}
console.log(onboarding05({ name: 'Fulano', function: 'dev', email: 'user@email.com' }));
const pinguimRei = {
    name: 'Tux',
    subespecie: 'Pinguim-Rei',
    altura: 0.9,
    idade: 2,
    sexo: 'M',
    dieta: 'Peixe',
    dominio: 'Eukaryota',
    reino: 'Animmalia',
    filo: 'Chordata',
    classe: 'Aves',
    ordem: 'Spheniscidae',
    genero: 'Aptenodytes',
    especie: 'Aptenodytes Patagonicus'
};
console.log(pinguimRei);
