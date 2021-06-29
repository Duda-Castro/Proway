# calculadora.js


function calculadora (valorinvest){
  
  var viewsoriginal = (valorinvest * 30);
  var viewsatual = viewsoriginal
  var viewstotal = viewsoriginal
  var clickstotais = 0
  var compartilhamentostotais = 0

  
  for(i=0;i<4;i++){
   
  var clicks = (viewsatual/8.33333);
  var compartilhamento = (clicks/6.67);
  var novasviews = (compartilhamento * 40);
  viewsatual = novasviews
  viewstotal = viewstotal + novasviews
  clickstotais = clickstotais + clicks
  compartilhamentostotais = compartilhamentostotais + compartilhamento

  if(viewsatual = 0){
    break
  }

  }
  
  var relatorio = viewstotal.toFixed(0) + ',' + clickstotais.toFixed(0) + ',' + compartilhamentostotais.toFixed(0)
  
  
return String(relatorio)

}


var valor = 50
var relatorio = calculadora(valor)
var relatoriosplit = relatorio.split(',')
var viewstotais = relatoriosplit[0]
var clickstotais = relatoriosplit[1]
var compartilhamentostotais = relatoriosplit[2]

if(valor < 0 ){

  console.log("Insira um valor válido.")
  
}else{
  console.log("O valor aproximado de visualizações é de " + viewstotais + " Para R$ " + valor.toFixed(2) + " investidos")
}














