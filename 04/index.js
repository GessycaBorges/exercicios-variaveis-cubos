// Calcular juros compostos
const capital = 1000;
const taxaFixa = 0.125;
const periodoDeTempo = 5;

const montante = capital * ((1 + taxaFixa) ** periodoDeTempo);
console.log (`O seu montante será de ${montante.toFixed(0)} reais`);