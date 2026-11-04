const botoesNum = document.querySelectorAll('.num');

botoesNum.forEach(function (botao) {
  botao.addEventListener('click', function () {
    console.log(botao.textContent);
  });
});

const opBotoes = document.querySelectorAll('.op');

opBotoes.forEach(function (botaoOp) {
  botaoOp.addEventListener('click', function () {
    console.log(botaoOp.dataset.op);

  });
});