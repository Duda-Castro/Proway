// calculadora.js

// Para inserir o valor investido, substituir o valor '0.00' abaixo pelo valor investido;
const valor = 0.00;

// variáveis a serem calculadas
let clickstotais = 0
let viewstotais = viewsoriginal;
let compartilhamentostotais = 0;



// função de calculadora, calcula visualizações, compartilhamentos e clicks;
export function calculadora(valor) {
    const viewsoriginal = valor * 30;
    let viewsatuais = viewsoriginal;

    for (let i = 0; i < 4; i++) {
        let clicks = viewsatuais / 8.33333;
        let compartilhamento = clicks / 6.67;
        let novasviews = compartilhamento * 40;
        viewsatuais = novasviews;
        viewstotais = viewstotais + novasviews;
        clickstotais = clickstotais + clicks;
        compartilhamentostotais = compartilhamentostotais + compartilhamento;

        if ((viewsatuais = 0)) {
            break;
        }
    }


    return;
}

//função calculadora chamada
calculadora(valor);


//caso o valor inserido seja negativo, o sistema solicita a inserção de um valor válido
if (valor < 0) {
    console.log("Insira um valor válido.");
} else {
    console.log(
        "O valor aproximado de visualizações é de " +
        viewstotais +
        " Para R$ " +
        valor.toFixed(2) +
        " investidos"
    );
}
