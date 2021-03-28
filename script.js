var valor;
var resultado;

function botao(num){
    valor = document.calc.result.value += num;
}

function reseta(){
    document.calc.visor.value = '';
}
function calcula(){
    var resultado = eval(valor);
    document.calc.result.value = resultado.toLocaleString('pt-br');
}



/*function mostrarValor(){
    alert(document.getElementById("meu-input").value)
}*/