// Personaje de Tv

let nombre ="Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let Personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad:16,
};

console.log(Personaje.nombre);
console.log(Personaje);
console.log(Personaje['anime']);


Personaje.edad = 13;

let llave = 'edad';
Personaje[llave] = 16;

delete Personaje.anime;

console.log(Personaje);