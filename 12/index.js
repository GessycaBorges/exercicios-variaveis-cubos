// Taxa de Juros
const montante = 90_000;
const capitalInicial = 60_000;
const meses = 24;

const juros = Math.pow((montante / capitalInicial), (1 / meses)) - 1;
const taxaDeJuros = juros * 100;

console.log (`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após ${meses} meses você teve que pagar ${montante} reais.`);