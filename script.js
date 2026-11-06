const botoesNum = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const botoesOp = document.querySelectorAll('.op');
const botaoLimpar = document.querySelector('.limpar');
const botaoCalcular = document.querySelector('.calcular');

botoesNum.forEach(function (botao) {
  botao.addEventListener('click', function () {
    display.value += botao.textContent; // adiciona ao final do display o texto que aparece no botão
  });
});

botoesOp.forEach(function (botao) {
  botao.addEventListener('click', function () {
    //guarda o ultimo caractere do display (length - 1, pois a contagem começa em 0):
    const ultimo = display.value[display.value.length - 1]; 
    // se o display esta vazio OU ja terminar com operadores encerra sem fazer nada:  
    if (display.value.length === 0 || ultimo === '-' || ultimo === '+' || ultimo === '/' || ultimo === '*') {
      return;
    }
    //so chega aqui apos passar nas verificaçoes
    //adiciona o simbolo do data-op por isso o X do botao entra como * no display.
    display.value += botao.dataset.op;


  });
});

botaoLimpar.addEventListener('click', function () {
  //troca o conteudo por texto vazio , lembrete : = troca += acrescenta!! 
  display.value = '';
});

botaoCalcular.addEventListener('click', function () {
  if (display.value.length === 0) {  //checa se display esta vazio , caso esteja ele nao prossegue return encerra a funçao.
    return;
  }
  //só nessa parte sabemos se tem conteudo/conta , entao ja é seguro pegar o ultimo caractere
  const ultimo = display.value[display.value.length - 1];
//conta incompleta ex.'5+...' : return encerra  para que o eval nao de erro
  if (ultimo === '+' || ultimo === '-' || ultimo === '/' || ultimo === '*') {
    return;
  }
// eval le o texto calcula e mostra resultado no display 
  display.value = eval(display.value);
});