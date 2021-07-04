//Importação da dependendia prompt-sync e da calculadora.
import CALCULATOR from './calculadora.js'
import PromptSync from 'prompt-sync'

//Array que armazenará todos anuncios criados.
const BDsimulado = [];

//Mensagem que solicita a inserção se o usuário deseja cadastrar um anuncio.
console.log("você deseja cadastrar um novo anuncio? (Y/N)")
let cadastroanuncio = PromptSync();
let inicializacao = cadastroanuncio();

//Se o usuário decidir não cadastrar, o sistema é encerrado imediatamente.
if (inicializacao.toLowerCase() == "n") { console.log("Sistema encerrado.") }
//Se o usuário decidir cadastrar o sistema guia o usuário pelo cadastro dos anuncios.
else if (inicializacao.toLowerCase() == "y") {
  while (inicializacao.toLowerCase() == "y") {

    //Aqui o sistema solicita os dados do anuncio a ser cadastrado.
    console.log("Insira o nome do seu anuncio: ")
    const entrada1 = PromptSync();
    let anuncio = entrada1()
    console.log("Insira o nome do cliente: ")
    const entrada2 = PromptSync();
    let cliente = entrada2()
    console.log("Insira a data inicial do anuncio seguindo o padrão (dia/mês/ano): ")
    const entrada3 = PromptSync();
    let datainicio = entrada3()
    console.log("Insira a data final do anuncio seguindo o padrão (dia/mês/ano): ")
    const entrada4 = PromptSync();
    let datafinal = entrada4()
    console.log("Insira o valor de investimento diário: ")
    const entrada5 = PromptSync();
    let investdia = entrada5()

    /*Função calculodata: função que permite a conversão da data informada para o método Date.parse, transformando a data em 
    a quantidade de milisegundos entre a data informada e 01 de Janeiro de 1970, 00:00:00 UTC.
    esta função é importante para calcular a diferença de dias entre a data inicial e a data final
    além de ser utilizada para filtrar os resultador por pedíoro mais a frente.*/

    function calculodata(data) {
      var datasplitada = data.split('/')
      var dia = datasplitada.shift()
      var mes = datasplitada.shift()
      var ano = datasplitada.shift()
      var datainvert = ano + "," + mes + "," + dia
      var datamiliseg = Date.parse(datainvert)
      return datamiliseg
    }

    let datainicialmiliseg = calculodata(datainicio)
    let datafinalmiliseg = calculodata(datafinal)

    //Diferença e conversão dos milisegundos para dias.
    let diffmiliseg = datafinalmiliseg - datainicialmiliseg
    let diffseg = diffmiliseg / 1000
    let diffmin = diffseg / 60
    let diffhora = diffmin / 60
    let diffdias = diffhora / 24

    //Valor total investido.
    let custototal = investdia * diffdias + 1;
    //Convocação da função calculadora.
    let relatorio = CALCULATOR(custototal)
    //Separação dos dados do relatório obtido através da função calculadora.
    let relatoriosplit = relatorio.split(',')
    let viewstotais = relatoriosplit.shift()
    let cliquestotais = relatoriosplit.shift()
    let compartilhamentostotais = relatoriosplit.shift()

    //Relatório do anuncio cadastrado.
    console.log("Relatório do anuncio: " + '"' + anuncio + '"')
    console.log(" ")
    console.log("O investimento total deste anuncio será de: R$ " + custototal.toFixed(2))
    console.log("A quantidade máxima de visualizações será aproximadamente: " + viewstotais + '.')
    console.log("A quantidade máxima de cliques será aproximadamente: " + cliquestotais + '.')
    console.log("A quantidade máxima de compartilhamentos será aproximadamente: " + compartilhamentostotais + '.')

    //Todos os dados importantes são atribuidos ao objeto anuncioBD.
    let anuncioBD = {
      anuncio: anuncio,
      cliente: cliente.toLowerCase(),
      datainicio: datainicio,
      datainicialmiliseg: datainicialmiliseg,
      datafinal: datafinal,
      datafinalmiliseg: datafinalmiliseg,
      investdia: investdia,
      custototal: custototal,
      visualizacoes: viewstotais,
      clicks: cliquestotais,
      compartilhamentos: compartilhamentostotais,
      custo: custototal
    }
    //A variavel que armazena os anuncios recebe os valores importantes do anuncio cadastrado.
    BDsimulado.push(anuncioBD)

    //Mensagem que retorna ao cadastro do anuncio caso o usuário deseje cadastrar novos anuncios.
    console.log("você deseja cadastrar um novo anuncio? (Y/N)")
    let novocad = PromptSync()
    inicializacao = novocad();

    //Caso nenhum anuncio tenha sido cadastrado, o sistema encerra.
    if (inicializacao.toLowerCase() == "n" && Object.keys(BDsimulado).length == 0) {
      console.log("Sistema encerrado.")

      //Caso o usuário esteja satisfeito com o cadastro de anuncios, o sistema passa para o filtro de anuncios cadastrados.
    } else if (inicializacao.toLowerCase() == "n" && Object.keys(BDsimulado).length != 0) {
      console.log(" ")
      console.log("você deseja filtrar os anuncios? (Y/N)")
      const filtroopcao = PromptSync();
      const filtro = filtroopcao()
      if (filtro.toLowerCase() == "n") {
        //Se o usuário não deseje utilizar o filtro, o sistema é encerrado.
        console.log("Sistema encerrado.")
      } else {
        //Aqui o sistema oferece a opção do usuário filtrar e visualizar um relatório filtrando por cliente e/ou por período.
        console.log("Deseja filtrar por intervalo de tempo e/ou por cliente? ((cliente/intervalo) ou (cliente e intervalo)")
        const opcaofiltroprompt = PromptSync();
        const opcaofiltro = opcaofiltroprompt()

        //Se o usuário optar pelo filtro de ambos, cliente e intervalo.
        if (opcaofiltro.toLowerCase() == "cliente e intervalo") {
          //O sistema solicita que o usuário informe o nome do cliente.
          console.log("Nome do cliente: ")
          const nomefiltroinput = PromptSync();
          const nomefiltro = nomefiltroinput()
          //O sistema solicita que o usuário informe a data inicial.
          console.log("Data inicial: (dia/mes/ano)")
          const datainicialfiltroinput = PromptSync();
          const datainicialfiltro = datainicialfiltroinput()
          const datainiciomilisegfilter = calculodata(datainicialfiltro)
          //O sistema solicita que o usuário informe a data final.
          console.log("Data final: (dia/mes/ano)")
          const datafinalfiltroinput = PromptSync();
          const datafinalfiltro = datafinalfiltroinput()
          const datafinalmilisegfilter = calculodata(datafinalfiltro)

          //Filtro.
          const name = nomefiltro.toLowerCase()
          const arrfiltered = BDsimulado.filter(function (elem) {
            return ((elem.cliente == name) && ((elem.datainicialmiliseg >= datainiciomilisegfilter) && (elem.datafinalmiliseg <= datafinalmilisegfilter)))
          });

          //Exibição do relatório de todos anuncios filtrados com os seus principais atributos.
          for (let i = 0; i < arrfiltered.length; i++) {
            console.log("Anuncio: " + arrfiltered[i]["anuncio"])
            console.log("Cliente: " + arrfiltered[i]["cliente"])
            console.log("Data inicial: " + arrfiltered[i]["datainicio"])
            console.log("Data final: " + arrfiltered[i]["datafinal"])
            console.log("Visualizações: " + arrfiltered[i]["visualizacoes"])
            console.log("Clicks: " + arrfiltered[i]["clicks"])
            console.log("Compartilhamentos: " + arrfiltered[i]["compartilhamentos"])
            console.log("Investimento diário: R$ " + Number(arrfiltered[i]["investdia"]).toFixed(2))
            console.log("Custo total: R$ " + Number(arrfiltered[i]["custo"]).toFixed(2))
            console.log(" ")

          }

          //Se o usuário optar pelo filtro de cliente.
        } else if (opcaofiltro.toLowerCase() == "cliente") {
          //O sistema solicita que o usuário informe o nome do cliente.
          console.log("Nome do cliente: ")
          const nomefiltroinput = PromptSync();
          const nomefiltro = nomefiltroinput()

          //Filtro.
          const name = nomefiltro.toLowerCase()
          const arrfiltered = BDsimulado.filter(function (elem) {
            return (elem.cliente == name)
          });
          for (let i = 0; i < arrfiltered.length; i++) {
            console.log("Anuncio: " + arrfiltered[i]["anuncio"])
            console.log("Cliente: " + arrfiltered[i]["cliente"])
            console.log("Data inicial: " + arrfiltered[i]["datainicio"])
            console.log("Data final: " + arrfiltered[i]["datafinal"])
            console.log("Visualizações: " + arrfiltered[i]["visualizacoes"])
            console.log("Clicks: " + arrfiltered[i]["clicks"])
            console.log("Compartilhamentos: " + arrfiltered[i]["compartilhamentos"])
            console.log("Investimento diário: R$ " + Number(arrfiltered[i]["investdia"]).toFixed(2))
            console.log("Custo total: R$ " + Number(arrfiltered[i]["custo"]).toFixed(2))
            console.log(" ")

          }

          //Se o usuário optar pelo filtro de intervalo.
        } else if (opcaofiltro.toLowerCase() == "intervalo") {
          //O sistema solicita que o usuário informe a data inicial.
          console.log("Data inicial: (dia/mes/ano)")
          const datainicialfiltroinput = PromptSync();
          const datainicialfiltro = datainicialfiltroinput()
          const datainiciomilisegfilter = calculodata(datainicialfiltro)
          //O sistema solicita que o usuário informe a data final.
          console.log("Data final: (dia/mes/ano)")
          const datafinalfiltroinput = PromptSync();
          const datafinalfiltro = datafinalfiltroinput()
          const datafinalmilisegfilter = calculodata(datafinalfiltro)

          //Filtro.
          const arrfiltered = BDsimulado.filter(function (elem) {
            return ((elem.datainicialmiliseg >= datainiciomilisegfilter) && (elem.datafinalmiliseg <= datafinalmilisegfilter))
          });
          for (let i = 0; i < arrfiltered.length; i++) {
            console.log("Anuncio: " + arrfiltered[i]["anuncio"])
            console.log("Cliente: " + arrfiltered[i]["cliente"])
            console.log("Data inicial: " + arrfiltered[i]["datainicio"])
            console.log("Data final: " + arrfiltered[i]["datafinal"])
            console.log("Visualizações: " + arrfiltered[i]["visualizacoes"])
            console.log("Clicks: " + arrfiltered[i]["clicks"])
            console.log("Compartilhamentos: " + arrfiltered[i]["compartilhamentos"])
            console.log("Investimento diário: R$ " + Number(arrfiltered[i]["investdia"]).toFixed(2))
            console.log("Custo total: R$ " + Number(arrfiltered[i]["custo"]).toFixed(2))
            console.log(" ")

          }
        } console.log("Sistema encerrado.") //Ao final o sistema é encerrado.
      }
    }
  }

}


