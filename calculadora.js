//calculadora.js
// Mensagem introdutória.
console.log("Qual aplicação deseja iniciar? (calculadora/sistema de cadastro)")
const enter = PromptSync()
const inicio = enter()

//Importação da dependencia prompt-sync, para que o fornecimento de dados pelo teclado seja possível.
import PromptSync from "prompt-sync";
//Modularização e exportação da função calculadora, que também será usada no arquivo cadastro_de_anuncios.js.
export default function CALCULATOR(valorinvest) {
    const viewsoriginal = valorinvest * 30;
    let viewsatuais = viewsoriginal;
    let clickstotais = 0
    let compartilhamentostotais = 0;
    let viewstotais = viewsoriginal

    for (let i = 1; i < 4; i++) {
        let clicks = viewsatuais / 8.33333;
        let compartilhamento = clicks / 6.67;
        let novasviews = compartilhamento * 40;
        viewsatuais = novasviews;
        viewstotais = viewstotais + novasviews;
        clickstotais = clickstotais + clicks;
        compartilhamentostotais = compartilhamentostotais + compartilhamento;
    }
    let relatorio =
        viewstotais.toFixed(0) +
        "," +
        clickstotais.toFixed(0) +
        "," +
        compartilhamentostotais.toFixed(0);
    viewstotais = 0
    clickstotais = 0
    compartilhamentostotais = 0


    return String(relatorio);

}


if (inicio.toLowerCase() == "calculadora") {

    //Entrada do valor que será investido, para que uma projeção de alcance seja realizada.
    console.log("Insira o valor a ser investido:")
    const entrada = PromptSync();
    let invest = parseFloat(entrada()).toFixed(2)

    //Convocação da função calculadora.
    let funccal = CALCULATOR(invest);
    let funccalsplit = funccal.split(',')

    //Caso o valor inserido seja negativo, o sistema solicita a inserção de um valor válido.
    if (invest < 0) {
        console.log("Insira um valor válido.");
        //Caso o valor inserido seja positivo, a calculadora irá realizar a projeção.    
    } else {
        console.log(
            "O valor aproximado de visualizações é de " +
            funccalsplit.shift() +
            " Para R$ " +
            parseFloat(invest).toFixed(2) +
            " investidos"
        );
    }
} else if (inicio.toLowerCase() == "sistema de cadastro") { }

