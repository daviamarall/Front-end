const precoEtanol = 4.40 ; 
const precoGasolina = 5.30;
const tipoCombustivelVeiculo = 'Gasolina'; // Pode ser 'Etanol' ou 'Gasolina'
const gastoPorKM = 10;
const distancia = 1300; 

// Cálculo do consumo de combustível e valor gasto

const litrosConsumidos = distancia / gastoPorKM;

if(tipoCombustivelVeiculo === 'Gasolina'){
    valorGasto = litrosConsumidos * precoGasolina;
}
else if(tipoCombustivelVeiculo === 'Etanol'){
    valorGasto = litrosConsumidos * precoEtanol;
}

console.log('Tipo de combustível: ' + tipoCombustivelVeiculo);
console.log('Kilômetros percorridos: ' + distancia);
console.log('Litros consumidos: ' + litrosConsumidos.toFixed(2));
console.log('Valor gasto: R$ ' + valorGasto.toFixed(2));


