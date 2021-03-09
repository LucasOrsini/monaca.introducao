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
