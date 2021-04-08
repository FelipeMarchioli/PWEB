function maior() {
  let numeros = [];
  numeros.push(document.getElementById("numero1").value);
  numeros.push(document.getElementById("numero2").value);
  numeros.push(document.getElementById("numero3").value);
  ;

  const maiorNum = Math.max(numeros.reduce((a, b) => {
                              return Math.max(a, b);
                            }));

  alert(maiorNum);
};