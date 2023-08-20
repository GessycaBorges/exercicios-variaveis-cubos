// Soma dos ângulos internos de um polígono
const ladosPoligono = 6;

const somaAngulosInternos = (ladosPoligono - 2) * 180;
const anguloEmGraus = somaAngulosInternos / ladosPoligono;

console.log (`A soma dos ângulos internos é ${somaAngulosInternos} e o valor de cada ângulo é de ${anguloEmGraus} graus`);