# calculadora.js
function calculadora (valorinvest){
  
  var viewsoriginal = (valorinvest * 30);
  var viewsatual = viewsoriginal
  var viewstotal = viewsoriginal


  
  for(i=0;i<4;i++){
   
  var clicks = viewsatual/8.33333;
  var compartilhamento = clicks/6.67;
  var novasviews = compartilhamento * 40;
  viewsatual = novasviews
  viewstotal = viewstotal + novasviews
  
  if(viewsatual = 0){
    break
  }

  }
  
  
  
  
return parseInt(viewstotal)

}


var valor = 1000000
var visualizacoes = calculadora(valor)



console.log("O valor aproximado de visualizações é de " + calculadora(valor) + " Para R$ " + valor.toFixed(2) + " investidos")




