function media() {
  let notaUm = parseFloat(document.getElementById("nota1").value);
  let notaDois = parseFloat(document.getElementById("nota2").value);
  let notaTres = parseFloat(document.getElementById("nota3").value);
  let media = (notaUm + notaDois + notaTres) / 3;
  alert(media);
};

function soma() {
  let  numUm = parseFloat(document.getElementById("num1").value);
  let  numDois = parseFloat(document.getElementById("num2").value);
  let soma = ( numUm + numDois );
  alert(soma);
};

function subtracao() {
  let  numUm = parseFloat(document.getElementById("num1").value);
  let  numDois = parseFloat(document.getElementById("num2").value);
  let sub = ( numUm - numDois );
  alert(sub);
};

function multiplicacao() {
  let  numUm = parseFloat(document.getElementById("num1").value);
  let  numDois = parseFloat(document.getElementById("num2").value);
  let mult = ( numUm * numDois );
  prompt(mult);
};

function divisao() {
  let  numUm = parseFloat(document.getElementById("num1").value);
  let  numDois = parseFloat(document.getElementById("num2").value);
  let div = numDois === 0 ? 0 : ( numUm / numDois );
  prompt(div);
};

function resto() {
  let  numUm = parseFloat(document.getElementById("num1").value);
  let  numDois = parseFloat(document.getElementById("num2").value);
  let resto = ( numUm % numDois );
  confirm(resto);
};