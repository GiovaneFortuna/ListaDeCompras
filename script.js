var lista = [];  // declara vetor global

function adicionarCompras(){
  
  // cria referencia aos elementos de entrada e saida de dados da pagina
  const inLista = document.getElementById('inLista');
  const outLista = document.getElementById('outLista');
 
  // obtem nome das compras
  const compras = inLista.value;
  
  if(compras == ""){
    outAlerta.textContent = "Adicione algo na lista!"
    inLista.focus();
    return;
  }
  
  // adiciona o elemento "compras" no final do vetor
  lista.push(compras);
  
  let mercado = "";
  
 // var mercado = ""; // string para concatenar com compras
  for(let i = 0; i < lista.length; i++){
    mercado += (i + 1) + " . " + lista[i] + "\n";
   
  }
  
  // altera o conteudo da tag outLista
  outLista.textContent = mercado;
  inLista.value= "";
    
}

const btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener("click", adicionarCompras)

