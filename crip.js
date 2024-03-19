let texto = document.querySelector("input#textos");
let resposta = document.querySelector("p#irepostas");


function crip() {
  let cript = texto.value;

  let textoCrip = cript
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  resposta.innerHTML = textoCrip;
}
function descip() {
  let cript = texto.value;
  let textoDescrip = cript
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  resposta.innerHTML = textoDescrip;
}
function copiar() {
  navigator.clipboard.writeText(resposta.innerHTML).then(() => {
    alert("Copied to Mensage"); //entre parenteses voce coloca o input ou a caixa do texto que voce quer copiar.
  });
}
