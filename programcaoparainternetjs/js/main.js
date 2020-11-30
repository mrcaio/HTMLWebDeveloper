
function soma(n1, n2) {
    return n1+n2;
}

function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaidade(idade));

//alert (soma(5,10));


/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert (soma(5,10));
alert (setReplace ("Vai Japão", "Japão", "Brasil");






/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

/*
var count ;
for(count = 0; count <= 5, count ++) {
    alert(count);
}


/*var count = 5;
while (count < 5) {
    console.log(count);
    //count = count + 1;
    count=++;
}


/*
var idade = prompt ("Qual sua Idade?");

if (idade >= 18) {
    alert("Maior de Idade");
}
else {
    alert("Menor de Idade");
}


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista);
//console.log(lista.join("-"));




/*var nome = "Rafael Galleani";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem" + idade + "anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade*idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"))*/