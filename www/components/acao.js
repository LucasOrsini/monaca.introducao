// This is a JavaScript file
// No momento do click, no elemento somar, será realizada a função...
// .val puxa os valores de elementos input dum formulário
$(document).on("click","#somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) + parseFloat(valor2);
  // quando passo valor dentro do .val() ele preenche o input / quando não, ele só armazena
  $("#resultado").val(resultado);
});
$(document).on("click","#subtracao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) - parseFloat(valor2);
  // quando passo valor dentro do .val() ele preenche o input / quando não, ele só armazena
  $("#resultado").val(resultado);
});
$(document).on("click","#multiplicacao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) * parseFloat(valor2);
  // quando passo valor dentro do .val() ele preenche o input / quando não, ele só armazena
  $("#resultado").val(resultado);
});
$(document).on("click","#divisao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = parseFloat(valor1) / parseFloat(valor2);
  // quando passo valor dentro do .val() ele preenche o input / quando não, ele só armazena
  $("#resultado").val(resultado);
});
$(document).on("click","#exponenciacao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var resultado = Math.pow(parseFloat(valor1), parseFloat(valor2));
  // quando passo valor dentro do .val() ele preenche o input / quando não, ele só armazena
  $("#resultado").val(resultado);
});
