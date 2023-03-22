console.log('Olá, Java Script!')

var userName = 'Aline'

document.getElementById('user-name').innerHTML = userName

//variáveis//

//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

//Operadores matemáticos//

//var n1 = 5
//var n2 = 5

//console.log(typeof n1)
//console.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

//var total = n1 + n2
//console.log(total)

//Operadores de comparação//
//Igual (==)
//Retorna verdadeiro se os valores comparados forem iguais.

//Não igual (!=)
//Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.

//Igual estrito (===)
//Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.

//Não igual estrito (!==)
//Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes

//Maior que (>)
//Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro

//Maior ou igual que (>=)
//Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro

//Menor que (<)
//Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

//Menor ou igual que (<=)
//Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro


//var v1 = '5'
//var v2 = 5

//var resultado = v1 == v2
//console.log(resultado) 

//function soma( n1, n2){
    //console.log(n1+n2)
//}

//invocar função de soma

//soma(5, 5)

//function boasVindas(nome) {
//    alert(nome + ', seja bem-vindo(a)!')
//}
//boasVindas('Aline')

//function soma(n1, n2){
//    return n1 + n2
//}

//var resultado = soma(5, 5)
//console.log(resultado)

//Controle de Fluxos//
//Operação bancária//

//var saldo = 1000

//function saque(valor) {
// o valor de comparação fica dentro do parenteses
//    if (valor > saldo){
//        console.log('Valor é maior que o saldo da conta')
//    } else if (valor > 700) {
//        console.log('Valor do saque é maior que o máximo permitido por operação')
//    } else {
//        saldo = saldo - valor
//    }
//   
//}
//
//saque(701)
//console.log(saldo)

//Arrays//

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//primeiro elemente ocupa a posição 0, o segundo na posição 1, etc...
//console.log(gaveteiro[2])

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

//personagens.push('C3PO')
//push adiciona novo elemento ao Array
//personagens.push('R2D2')

//pop exclui o ultimo elemento do Array
//personagens.pop()

//Para remover um elemento do array chama a variavel personagens, faz um filtro de chama uma função com um argumento que identifica o item que não será chamado
//personagens = personagens.filter(function(p){
//    return p !== 'Darth Vader'
//})
//Filtro para selecionar um item específico
//personagens = personagens.filter(function(p){
//    return p == 'Mestre Yoda'
//})
//console.log(personagens)

//Controle de repetição//

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
//Usando controle de repetição para imprimir vários itens de um Arrays por lista
//personagens.forEach(function(p){
//    console.log(p)
//})

//for (var i in personagens) {
//console.log(personagens [i])
//
//}

//for (var i = 0; i <= 10; i++) {
//    console.log(i)
//    //código vai ser executado até a condição retornar false
//}

//Objetos//
//Serve para armazenar informações de forma flexivél e agrupada
//OBS: Os valores podem ser definidos dentro das chaves, tornando o código mais elegante
//É muito parecido com JSON
//var yoda = {
//   nome: 'Mestre Yoda',
//   idade: 100,
//   jedi: true,
// pode colocar função dentro do valor
//    mostraIdade: function() {
//        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//    }
//}

//yoda.nome = 'Mestre Yoda'
//yoda.idade = 100
//yoda.jedi = true

//console.log(yoda)
//yoda.mostraIdade()

//Constantes//

//const nome = 'Darth Vader'
//console.log(nome)

//nome = 'Mestre Yoda'
//console.log(nome)