//1 - crie uma função que exiba uma mensagem no console

function mensagem(msg) {
    console.log(msg)
}

mensagem("olá minha função")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibeNome(nome) {
  console.log(nome)  
}
exibeNome("Leandro")
//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function NomeEstilo(nome, idade, EstMusi) {
    console.log(`${nome} , idade ${idade}, gosta de ${EstMusi}`)  
  }
  NomeEstilo("Leandro", "34", "Bossa Nova")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function MusiFilme(Filme, EstMusi) {
    console.log(`${Filme} , gosta de ${EstMusi}`)  
  }
  NomeEstilo("Senhor dos Aneis", "Ciel de Paris")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero) {
    console.log(numero*3)
    
}
triplo(2)