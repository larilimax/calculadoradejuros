const calcularBtn = document.querySelector('#calcular')
calcularBtn.addEventListener('click', calcularGorjeta)
 
function calcularGorjeta() {
  const total = document.querySelector('#total').value
  const nPessoas = document.querySelector('#nPessoas').value
  const porcentagem = document.querySelector('#porcentagem').value
 
  if (!total || !nPessoas) {
    alert('Campos Vazios.')
  } else {
    const gorjeta = (total * (porcentagem / 100)) / nPessoas
 
    const valorGorjeta = document.querySelector('#valor-gorjeta')
    valorGorjeta.innerText = 'R$' + gorjeta.toFixed(2)
  }
}