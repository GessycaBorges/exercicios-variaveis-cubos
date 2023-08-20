// Casos de COVID-19
const populacaoInicial = 1000;
const podeTransmitir = 4;
const tempo = 7;

const pessoasInfectadas = (populacaoInicial * (Math.pow(podeTransmitir, (tempo/7))));
console.log (`Após ${tempo} dias, o total de pessoas infectadas será de ${pessoasInfectadas}`);