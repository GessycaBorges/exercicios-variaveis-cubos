// Velocidade média
const distPercorridaMetros = 500;
const tempoSegundos = 10;

const velocidadeEmMetrosPorSegundo = distPercorridaMetros / tempoSegundos;
const velocidadeEmKmPorHora = velocidadeEmMetrosPorSegundo * 3.6;

console.log (`A sua velocidade média é de ${velocidadeEmKmPorHora} km/h`);