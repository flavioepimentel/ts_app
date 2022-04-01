"use strict";
// Numeric Enum 
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugu\u00EAs"] = 0] = "Portugu\u00EAs";
    Idiomas[Idiomas["Ingl\u00EAs"] = 1] = "Ingl\u00EAs";
    Idiomas[Idiomas["Hebraico"] = 2] = "Hebraico";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
// String Enum
var IdiomasString;
(function (IdiomasString) {
    IdiomasString["Portugu\u00EAs"] = "PT-BR";
    IdiomasString["Ingl\u00EAs"] = "EN-US";
    IdiomasString["Hebraico"] = "HB-IS";
})(IdiomasString || (IdiomasString = {}));
console.log(IdiomasString);
