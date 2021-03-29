var valor;
var resultado;
var calculado = false;

function botao(num){
    limpar()
    valor = document.calc.result.value += num;
}

function reseta(){
    document.calc.result.value = '';
    calculado = false
}
function calcula(){
    var resultado = eval(valor);
    document.calc.result.value = resultado.toLocaleString('pt-br');
    calculado = true;
}

function limpar() {
    if (calculado) {
        reseta()        
    }
}




