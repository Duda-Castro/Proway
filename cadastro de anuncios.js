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











//insercao de dados

var anuncio = "Mês do orgulho"
var cliente = "Luke Skywalker"
var datainicio = "01/06/2021"
var datafinal = "01/07/2021"
var investdia = 10

console.log("Relatório do anuncio: " +  '"' + anuncio + '"')
console.log(" ")

//calculo dias totais

var datainicialsplitada = datainicio.split('/')
var diainicio = datainicialsplitada.shift()
var mesinicio = datainicialsplitada.shift()
var anoinicio = datainicialsplitada.shift()
var datainicioinvert = anoinicio + "," + mesinicio + "," + diainicio
var iniciomiliseg = Date.parse(datainicioinvert)

var datafinalsplitada = datafinal.split('/')
var diafim = datafinalsplitada.shift()
var mesfim = datafinalsplitada.shift()
var anofim = datafinalsplitada.shift()
var datafiminvert = anofim + "," + mesfim + "," + diafim
var fimmiliseg = Date.parse(datafiminvert)

var diffmiliseg = fimmiliseg - iniciomiliseg
var diffseg = diffmiliseg / 1000
var diffmin = diffseg / 60
var diffhora = diffmin / 60
var diffdias = diffhora / 24 

var custototal = investdia * diffdias

console.log("O investimento total deste anuncio será de: R$ " + custototal.toFixed(2))


var relatorio = calculadora(custototal)
var relatoriosplit = relatorio.split(',')

console.log("A quantidade máxima de visualizações será aproximadamente: " + relatoriosplit.shift() + '.')
console.log("A quantidade máxima de cliques será aproximadamente: " + relatoriosplit.shift() + '.')
console.log("A quantidade máxima de compartilhamentos será aproximadamente: " + relatoriosplit.shift() + '.')










