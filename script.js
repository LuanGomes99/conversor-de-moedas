let valor = document.querySelector("#reais");
let input = document.querySelector("#converter");
let de = document.querySelector("#moedasde");
let para = document.querySelector("#moedaspara");
let label = document.querySelector("label span");
let simbolo = document.querySelector(".moedaSimbolo");

setInterval(function () {

  //Dolar para Reais

  if (de.value == "USD" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 5.1).toFixed(2).replace('.', ',');
      simbolo.innerText = "R$";
    }
  }

  //Dolar para Euro
  else if (de.value == "USD" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.92).toFixed(2).replace('.', ',');
      simbolo.innerText = "€";
    }
  }

  //Real para dolar
  else if (de.value == "BRL" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.20).toFixed(2).replace('.', ',');
      simbolo.innerText = "$";
    }
  }

  //Real para Euro
  else if (de.value == "BRL" && para.value == "EUR") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "€";
    } else {
      valor.innerText = (parseFloat(input.value) * 0.18).toFixed(2).replace('.', ',');
      simbolo.innerText = "€";
    }
  }

  //Euro para dolar
  else if (de.value == "EUR" && para.value == "USD") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "$";
    } else {
      valor.innerText = (parseFloat(input.value) * 1.09).toFixed(2).replace('.', ',');
      simbolo.innerText = "$";
    }
  }

  //Euro para Real
  else if (de.value == "EUR" && para.value == "BRL") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
      simbolo.innerText = "R$";
    } else {
      valor.innerText = (parseFloat(input.value) * 5.53).toFixed(2).replace('.', ',');
      simbolo.innerText = "R$";
    }
  }

  //Moeda propria
  else if (de.value == para.value) {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2).replace('.', ',');
      if (para.value == "USD") {
        simbolo.innerText = "$";
      } else if (para.value == "BRL") {
        simbolo.innerText = "R$";
      } else if (para.value == "EUR") {
        simbolo.innerText = "€";
      }
    } else {
      valor.innerText = parseFloat(input.value).toFixed(2).replace('.', ',');
      if (para.value == "USD") {
        simbolo.innerText = "$";
      } else if (para.value == "BRL") {
        simbolo.innerText = "R$";
      } else if (para.value == "EUR") {
        simbolo.innerText = "€";
      }
    }
  }
}, 1);
