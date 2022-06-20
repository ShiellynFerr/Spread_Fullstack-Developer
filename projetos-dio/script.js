//Estrutura básica switch
 
let dia = 4;

switch(dia){
    case 1: console.log('Segunda');
    break;
    case 2: console.log('Terça');
    break;
    case 3:  console.log('Quarta');
    break;
    case 4:  console.log('Quinta');
    break;
    default: console.log('Dia inválido');
    break;
}

// Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome
// de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e
// que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida
// aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne:
// “Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu
// navegador. Crie também um default , que retornará uma mensagem de erro no
// console.

let food = 'pizza';

switch(food) {
    case 'pizza'(food ===pizza): console.log('Pizza');
    break
}

// Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um
// perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais,
// cítrico e frutal. Utilizando uma estrutura switch/case , caso o comprador queira o floral,
// retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere outro aroma?”. Caso seja especificado um aroma que não está
// disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”.