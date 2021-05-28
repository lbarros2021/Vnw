//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 34

if (idade > 18) {
    console.log(`${idade} anos maior de 18`)
} else {
    console.log(`${idade} anos menor de 18`)
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humano = true

if (idade >= 18 && humano == true) {
    console.log(`você é maior de idade e humano`)
} else {
    console.log(`você não é maior de idade e humano`)
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "maio"

if (mes == "janeiro" || mes == "dezembro") {
    console.log(`você faz aniversario em janeiro ou dezembro`)
} else {
    console.log(`seu aniversário é em ${mes}`)
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "leandro"

if (nome.charAt(0) == "r") {
    console.log(`nome começa com letra r`)    
} else {
    console.log(`nome começa com letra ${nome.charAt(0)}`)
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Reis"
if (sobrenome.length > 6 || sobrenome.charAt(0) == "e") {
    console.log(`seu sobrenome tem mais de 6 letras ou começa com E`)    
} else {
    console.log(`seu sobrenome tem ${sobrenome.length} letras ou não começa com E`)
}