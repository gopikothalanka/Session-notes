'use strict';
//using quaryselectors
const btnClick = document.querySelector('.btn-click');
const userInput = document.querySelector('#user-input');

const submitResult =document.querySelector('.btn-click1')
const firstNum= document.querySelector('#first-num');
const secondNum = document.querySelector('#second-num');
const resultNum = document.querySelector('#result-num');

//buttons
btnClick.addEventListener('click',myFunction);
submitResult.addEventListener('click',myFunction1);

//functions for buttons
function myFunction(){
  var userText =userInput.value;
  console.log(userText);
}

function myFunction1(){
  var num1 = Number(firstNum.value);
  var num2 = Number(secondNum.value);
  var result = 0;
  result =num1 + num2;
  resultNum.value = result; 
  console.log(result);
}

//querySelector & querySelectorAll
const paragraph = document.querySelector('p');
console.log(paragraph);
//it will select only 1 paragraph
//from all paragraph's
const paragraphAll =document.querySelectorAll('p');
console.log(paragraphAll);

//it will select all paragraph's at a time 
//it will works on tags,elements,id,atributs also
