try{
var frutas= { tipo: "morango", estação: "inverno", quantidade: "3", valor: "R$10,00" } 

 
 const frutas_aqui = Object.freeze(frutas) 
 
 console.log("temos disponível = " + frutas_aqui.tipo + "\n") // 
 console.log("a estação é dessa fruta é o = " + frutas_aqui.estação + "\n") // uma vez criado basta extrair o conteudo 
 console.log("temos em estoque = " + frutas_aqui.quantidade + "\n")
 console.log("o preço atual é = " + frutas_aqui.valor + "\n")

 Object.keys(frutas_aqui).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, frutas_aqui[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
}
 catch{ console.log('não rolou, o primeiro')} 

 try{
  const objeto_aqui = { tipo: "morango", estação: "inverno", quantidade: "3", valor: "R$10,00" }; 

 
  console.log("temos disponível = " + frutas_aqui.tipo + "\n") 
 console.log("a estação é dessa fruta é o = " + frutas_aqui.estação + "\n")  
 console.log("temos em estoque = " + frutas_aqui.quantidade + "\n")
 console.log("o preço atual é = " + frutas_aqui.valor + "\n")

 Object.keys(objeto_aqui).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, objeto_aqui[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });

 }
 catch{ console.log('não rolou, o segundo')} 

 try{
  const fruta_aqui = require ('./classFruta')

const fruta = new Fruta_aqui('testeTipo', 'testeEstacao', 'testeQuantidade', 'testeValor'); 

console.log(fruta.tipo); // testeTipo 
console.log(fruta.estação); // testeEstacao
console.log(fruta.quantidade) // testeQuantidade

console.log("======================"); // testeValor 

 
 Object.keys(pessoa).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, pessoa[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
 }  catch{ console.log('não rolou, o terceiro')} 