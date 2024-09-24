(function () {
    console.log('widget instalado');
})();

// Criando a div abaixo do hero-slider, criando um id estilo para a div e colocando o texto.
var element = document.querySelector(".hero-slider");
var div = document.createElement("DIV");
div.id= "teste"
div.innerHTML = "<b>Clique para abrir</b>";
element.appendChild(div);

 // Estilizando a class estilo
 var styles = `
 .estilo {
  background-color: blue;
  color: white;
  width: 10%;
  padding: 10px;
  left: 1330px;
  z-index: 999;
  position: fixed;
  top: 654px;
 }
  .estiloActive{
     width: 25%;
     height= 500px;
     left: 1112px;
     bottom: 18px;
     top: 212px;
    position: fixed;
     background-color: blue;
     color: white;
     padding: 10px;
     height: 500px;
     z-index: 999;
  }

`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

var teste = document.querySelector("#teste");
teste.classList.add('estilo');

var teste = document.querySelector("#teste");
teste.addEventListener("click", function(){
teste.innerHTML = "<b>Lista de Pessoas</b>";


if (teste.classList.contains('estiloActive')) {
    console.log('O elemento possui a classe "estiloActive".');
    teste.classList.remove('estiloActive');
    teste.classList.add('estilo');
} else {
    console.log('O elemento não possui a classe "estiloActive".');
    teste.classList.add('estiloActive');
    teste.classList.remove('estilo');
}
})

var btnConsultar = document.querySelector("#teste");
btnConsultar.addEventListener("click", function(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/users")
    xmlHttp.send();
    xmlHttp.addEventListener("load", function(){
       // Transformando o texto em objetos.
       var listaPessoas = JSON.parse(xmlHttp.responseText)
       // Percorrendo cada item na lista
       listaPessoas.forEach(pessoas => {
        var element = document.querySelector("#teste");
        var div = document.createElement("div");
        div.innerHTML = "<div class ='pessoa'>Nome:</div> " + pessoas.name;
        element.appendChild(div);
       });
    })
})



