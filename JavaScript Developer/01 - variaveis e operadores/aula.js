
const precoCombustivel = 3.70;
let gastoPorKM = 10;
let distancia = 500; 

let litrosConsumidos = distancia / gastoPorKM ;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));