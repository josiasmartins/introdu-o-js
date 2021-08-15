// var nome ="maria";
// var n1 = 49;
// var n2 = 10;
// let frase = "Japão é o melhor time do mundo";
// alert(nome+ " tem "+idade)
// console.log((n1*n2)/40);
// console.log(frase.toUpperCase());
// alert(frase.replace("Japão", "Brasil"));

// var lista = ["maça", "pera", "laranja"];
// lista.pop();
// lista.push("uva")
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "))
// alert(lista[1]);

/*
var fruta = {name:"maça", cor: "vermelha"};
console.log(fruta.name);
alert(fruta.cor)
*/

/*
var frutas = [{name: "maça", cor: "vermelha"}, {name: "uva", cor: "roxo"}];
console.log(frutas[1].cor);
alert(frutas[0].cor)
*/


/*
var idade = prompt("Qual a sua idade");

if(idade > 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade")
}
*/

/*
var count = 0;
while(count <= 10) {
    console.log(count);
    alert(count)
    count++;
}
*/

/*
var count;
for(count=0; count<=10; count++) {
    alert(count);
};
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*
function soma(n1, n2) {
    return n1+ n2;
}
function validarIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Quantos anos você tem");
console.log(validarIdade(idade));
alert(soma(5, 20));
*/

// Manipulando elementos da página
function botao() {
    document.getElementById("thankyou").innerHTML = "Thank you for click";
    console.log(document.getElementById("thankyou"))
    //alert("Thank you for click")
}