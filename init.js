const valores = document.querySelectorAll('.valor');

valores.forEach(function(valor) {
  valor.addEventListener('click', function() {
    valores.forEach(function(valor) {
      valor.classList.remove('selecionado');
    });
    this.classList.add('selecionado');
    const valorSelecionado = this.innerText;
    const selectedElement = document.querySelector('.selected');
    selectedElement.innerHTML = `<p>You selected ${valorSelecionado} out of 5</p>`;
  });
});

document.querySelector(".botao").addEventListener("click", function() {
  document.querySelector(".parte-1").style.display = "none";
  document.querySelector(".parte-2").style.display = "block";
});



