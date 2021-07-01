// calculadora.js

// Para inserir o valor investido, substituir o valor '0.00' abaixo pelo valor investido;
const valorinvest = 0.00;

// variáveis a serem calculadas
let clickstotais = 0
let viewstotais = valorinvest * 30;
let compartilhamentostotais = 0;

// função de calculadora, calcula visualizações, compartilhamentos e clicks;
function calculadora(valorinvest) {
    const viewsoriginal = valorinvest * 30;
    let viewsatuais = viewsoriginal;

    for (let i = 1; i < 4; i++) {
        let clicks = viewsatuais / 8.33333;
        let compartilhamento = clicks / 6.67;
        let novasviews = compartilhamento * 40;
        viewsatuais = novasviews;
        viewstotais = viewstotais + novasviews;
        clickstotais = clickstotais + clicks;
        compartilhamentostotais = compartilhamentostotais + compartilhamento;
    }
    relatorio =
        viewstotais.toFixed(0) +
        "," +
        clickstotais.toFixed(0) +
        "," +
        compartilhamentostotais.toFixed(0);

    return String(relatorio);

}

//função calculadora chamada
calculadora(valorinvest);


//caso o valor inserido seja negativo, o sistema solicita a inserção de um valor válido
if (valorinvest < 0) {
    console.log("Insira um valor válido.");
} else {
    console.log(
        "O valor aproximado de visualizações é de " +
        viewstotais.toFixed(0) +
        " Para R$ " +
        valorinvest.toFixed(2) +
        " investidos"
    );
}
