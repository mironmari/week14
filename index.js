
// Задание 1
let showMessage = () => {
    let name1 = prompt('Как тебя зовут?');
    document.getElementById('result1').innerHTML='Привет, '+name1+'!';
}

// Задание 1 вторая версия
function userSubmit() {
    let UI=document.getElementById('userName').value;
    document.getElementById('result').innerHTML='Привет, '+UI+'!';
}

// Задание 2
let op;

function func() {

  let result;

  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);

  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  document.getElementById("result").innerHTML = result;
}

let text = "Я учу JavaScript!";
console.log(text);

// Задание 3

let btn_prev = document.querySelector('.tabs .prev'),
    btn_next = document.querySelector('.tabs .next');

let images = document.querySelectorAll('.photo img');
let i = 0;
btn_prev.onclick = function(){
   images[i].className = "";
    i = i - 1;
    if( i < 0){
      i = images.length - 1;
    }
    images[i].className = "shown";
};

btn_next.onclick = function(){
    images[i].className = "";
    i = i + 1; //i++
    if( i >= images.length){
      i = 0;
    }
    images[i].className = "shown";
};

// Задание 4

  function isLeapYear() {
  var year= document.getElementById("year").value;
  document.getElementById("result2").innerHTML
  = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);}