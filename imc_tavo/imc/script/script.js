let botao = document.getElementById('calcular');
let tabela = document.querySelector('table');
function calcularIMC(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    let tabela = document.querySelector('tbody');
    
    let lin = document.createElement('tr');
    lin.setAttribute("id", "lin")
    let colNome = document.createElement('td');
    colNome.innerHTML = nome;

    let colPeso = document.createElement('td');
    colPeso.innerHTML = peso;

    let colAltura = document.createElement('td');
    colAltura.innerHTML = altura;
    let classImc
    if(imc<18.4){
        classImc=(" Abaixo do Peso")
    }else if(imc>=18.5 && imc<=24.9){
        classImc=(" Peso normal")
    }else if(imc>=25 && imc <=29.9){
        classImc=(" Sobrepeso")
    }else if(imc>=30 && imc<=34.9){
        classImc=(" Obseidade Grau 1")
    }else if(imc>=35 && imc<=39.9){
        classImc=(" Obesidade Grau 2")
    }else if(imc>=40){
        classImc=(" Obesidade grau 3 ou Mórbida")
    }
    let colIMC = document.createElement('td');
    colIMC.innerHTML = (imc.toFixed(2)+classImc);

    lin.appendChild(colNome);
    lin.appendChild(colPeso);
    lin.appendChild(colAltura);
    lin.appendChild(colIMC);
  
    tabela.appendChild(lin);

}

function addDados(event){
    event.preventDefault();
    calcularIMC();
    nome.value = "";
    peso.value = "";
    altura.value = "";
}
botao.addEventListener('click', addDados);
