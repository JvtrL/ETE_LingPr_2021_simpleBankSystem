var clientes = [
    [nome = "João Vitor",
     código = "321", 
     senha = "123", 
     saldo = 5000], 
    [nome = "Túlio",
     código = "654", 
     senha = "456", 
     saldo = 5000],
]
var destino

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}

var cliente_localizado = (clientes.find(procura_cliente))

if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{
console.log(cliente_localizado)
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
var dinheiro = Number(window.prompt("Qual o valor à se retirar?"))
var saldo = cliente_localizado[3]
}
if ((operacao == 1) && (dinheiro < saldo)){
  var transaçao = parseInt(saldo) - dinheiro
  console.log("transação bem sucedida! Seu saldo agora é de: " +transaçao)
}

else {
  alert("Valor insuficiente para completar a transação")
}

  if(operacao == 2){
  var valorDaOp = Number(window.prompt("Qual o valor a se depositar?"))
  conta_deposito = window.prompt("Qual o código da conta de destino?")
  clientes.forEach(function(item, indice){
   if(clientes[indice][1] == conta_deposito){
      clientes[indice][3] = clientes[indice][3]+valorDaOp
    }
  })
  console.log("Depósito realizado com sucesso!")
}

  if(operacao == 3){
    var clienteT = window.prompt("digite o código de destino")
    clientes.forEach(function(item, indice){
      if((clientes[indice][1] == clienteT)){
        valor = clientes[indice][3]
        alert("saldo da conta: " +valor)
        valorOp = Number(window.prompt("Valor da transferencia?"))
        saldo = parseInt(saldo) - valorOp
        alert("saldo da sua conta: " +saldo)
        trans = parseInt(valor) + valorOp
        console.log("O valor transferido é de: " +valorOp+ "O saldo atual é de: " +trans)
      }
    })
  }
