// Criar um programa para verificar se o número 12 é divisível por 2 e por 3.

let num1 = 12;

if (num1 % 2 == 0 && num1 % 3 == 0) {
    console.log("O número " + num1 + " é divisível por 2 e por 3");
} else {
    console.log("O número " + num1 + " não é divisível por 2 e por 3");
}

//Criar um programa para mostrar um desconto de 12% para produtos acima de R$800.
 let preco = 800
let desconto = preco * 0.12;
    let precoFinal = preco - desconto;
if (preco > 800) {
   
    console.log("Preço original: " + preco);
    console.log("Desconto de 12%: " + desconto);
    console.log("Preço com desconto: " + precoFinal);
} else {
    console.log("O produto não tem desconto");
}

//Criar um programa que mostre os números de 1 a 10 usando laço de repetição.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Criar um programa para mostrar apenas os números pares entre 1 e 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Criar um programa para