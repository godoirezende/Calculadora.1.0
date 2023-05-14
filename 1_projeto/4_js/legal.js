
var result;
var valor;

function botao(num) {
    
    valor = document.getElementById('visor').value += num;
    document.getElementById('visor').value=valor;

}

function clean() {
    document.getElementById('visor').value="";
    
}

function igual() {
    
    result = eval(valor);
    document.getElementById('visor').value = result;
}