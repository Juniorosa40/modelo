const form = document.querySelector('#formulario');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  //console.log('Evento Previnido.');
  //setResultado('Olá Mundo.')
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  calcularImc(peso, altura);
});



function calcularImc(peso, altura) {

  let resultado = peso / (altura * altura);
  let resultadoFormatado = resultado.toFixed(2);

  setResultado(resultadoFormatado);
 
}

function setResultado(msg) {
  const resultado = document.querySelector('#resultado');
  let infoAdicional = "Fora de Faixa";

  if(msg < 18.5) {
      infoAdicional ="Abaixo do Peso. ";
  }

  if(msg > 18.5 && msg < 24.9) {
    infoAdicional ="Peso Normal. ";

  }

  if(msg > 25 && msg < 29.9) {
    infoAdicional ="Sobrepeso. ";

  }

  if(msg > 30 && msg < 34.9) {
    infoAdicional ="Obesidade Grau 1. ";

  }

  if(msg > 35 && msg < 39.9) {
    infoAdicional ="Obesidade Grau 2 ";

  }

  if(msg > 40) {
    infoAdicional ="Obesidade Grau 3 "; 

  }  
  resultado.innerHTML = '<b>Resultado: </b>' + msg + " --" + infoAdicional;
}

function limpar(){
  alert('Cheguei');
}