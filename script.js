
// Laços (loops)
// Exercício 1. While
/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.
Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.
Ex. Vamos supor que ele coloque: 10, 3, 50, 7, 0. 
O resultado deve ser: 70 */

/* let num = Number(prompt('Digite um número. Para sair, digite zero'))
let soma = 0

while(num !== 0){
  soma += num
  //soma = soma + num - As duas formas obtém o mesmo resultado.
  num = Number(prompt('Digite um número. Para sair, digite zero'))
}

alert(`A soma dos números é ${soma}`); */

//Exercício 2. For

/* Vamos escrever um programa que recebe um número por input de usuário. 
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa. 
- Para isso, vamos utilizar um laço for que roda por x vezes, onde x é o número digitado. */

/* let num = Number(prompt('Insira um número'));

for (let i = 0; i <= num; i++){
    console.log(i);
} */

//o i é o contador do for, que começa em zero e será incrementado até chegar no número que foi digitado no prompt. A condição de parada desse for é justamente esse contador, e eu vou dizer quando esse incremento para. 

// i++ é a mesma coisa que i = i + 1

/* Exercício 3. For com arrays

Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha: 
"O número do índice ${indice} é ${numero}"*/

/* const array = [7, 6, 5, 4, 3, 2, 1]

for (let i = 0; i < array.length; i++){
    console.log(`O valor do ìndice ${i} é ${array[i]}`);
} */

// Obs. No lugar de i, alguns programadores escrevem contador ou cont. 

// Exemplo de for com Array de Strings

 /* const arrayStrings = ['Renan', 'Danielle', 'Miguel', 'Celso', 'Silvana', 'Fernando', 'Cícera', 'Caetana', 'Maria', 'José', 'Leandro', 'Felipe', 'Bianca']

for(let i = 0; i < arrayStrings.length; i++){
    console.log(`A pessoa que está no índice ${i} é ---> ${arrayStrings[i]}`);
} */ 

/* Exercícios de fixação
1. Utilizando o laço while, escreva uma código que recebe um prompt, esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo: 
 - "A": Administrador;
 - "B": Usuário comum;
 - "C": Usuário assinante;
 Enquanto o valor passado for diferente da letra que representa "Administrador", o laço deve se repetir, exibindo a mensagem "Acesso negado". 
 Quando o valor for igual ao da letra que representa "Administrador", o laço deve parar, e a mensagem "Boas-vindas, admin!" deve ser impressa. 
 
 2. Escreva, utilizando o laço for, um programa que escreva a tabuada do 2.

 3. Crie um laço for que recebe um array de strings, e imprima no console a string em caixa alta.  */

/* 1.  
let tipoUsuario = prompt("Digite aqui a letra correspondente ao seu tipo de usuário: \n A - Administrador \n B - Usuário comum \n C - Usuário assinante")
 
 while(tipoUsuario !=='A'){
    alert('Acesso negado');
    tipoUsuario = prompt("Digite aqui a letra correspondente ao seu tipo de usuário: \n A - Administrador \n B - Usuário comum \n C - Usuário assinante")
}
alert('Boas-vindas, admin!'); */

/* 2. 
let tabuadaDois
for(let i = 0; i <= 10; i++) {
    tabuadaDois = i*2
    console.log('Tabuada do dois', tabuadaDois);
} */

/* 3. 
let arrayString = ['Pedro', 'Tiago', 'João']
for (let i = 0; i < arrayString.length; i++) {
    console.log(arrayString[i].toUpperCase());
} */

/* Outro exemplo - tabuada no Prompt
let num = Number(prompt('Digite até quando você quer ver a tabuada do 7'));

for (let i = 0; i <= num; i++) {
    console.log('7 x '+i+' = ' + (7*i));
} */





