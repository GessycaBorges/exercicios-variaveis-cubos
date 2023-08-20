// Desconto do tênis
const valorTotal = 129.99;
const meuDinheiro = 80;

const porcentagemDeDesconto = ((valorTotal - meuDinheiro) * 100) / valorTotal;
console.log (`Você precisa de ${porcentagemDeDesconto.toFixed(1)}% de desconto para comprar o tênis`);