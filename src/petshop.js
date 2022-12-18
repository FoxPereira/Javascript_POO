try{
    const pet_aqui = require ('./classPet')
  
  const pet = new pet_aqui('Animal_Nome', 'Animal_idade'); 
  
  console.log(Pet.animal); 
  console.log(Pet.idade);

  
    
   Object.keys(pessoa).forEach(key => { // cria indice chamado key para os iens do objeto
      console.log(key, pessoa[key]);    // exibe a lista de conteúdo do objeto em sequencia
    });
   }  catch{ console.log('erro ao executar')} 