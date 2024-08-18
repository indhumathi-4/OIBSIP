let inputTextArea=document.getElementById('inputTextArea');
let one = document.getElementById('one');
one.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "1";
});
let two = document.getElementById('two');
two.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "2";
});
let three = document.getElementById('three');
three.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "3";
});
let four = document.getElementById('four');
four.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "4";
});
let five = document.getElementById('five');
five.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "5";
});
let six=document.getElementById('six');
six.addEventListener('click', function() {
// Append "1" to the value of the textarea
inputTextArea.value += "6";
});
let seven = document.getElementById('seven');
seven.addEventListener('click', function() {
inputTextArea.value += "7";
});
let eight = document.getElementById('eight');
eight.addEventListener('click', function() {
inputTextArea.value += "8";
});
let nine = document.getElementById('nine');
nine.addEventListener('click', function() {
inputTextArea.value += "9";
});
let zero = document.getElementById('zero');
zero.addEventListener('click', function() {
inputTextArea.value += "0";
});

let mod = document.getElementById('mod');
mod.addEventListener('click', function() {
inputTextArea.value += "%";
});
let div = document.getElementById('div');
div.addEventListener('click', function() {
inputTextArea.value += "/";
});
let pro = document.getElementById('pro');
pro.addEventListener('click', function() {
inputTextArea.value += "*";
});
let plus = document.getElementById('plus');
plus.addEventListener('click', function() {
inputTextArea.value += "+";
});
let minus = document.getElementById('minus');
minus.addEventListener('click', function() {
inputTextArea.value += "-";
});
let dot = document.getElementById('dot');
dot.addEventListener('click', function() {
inputTextArea.value += ".";
});
function reset(){
        document.getElementById("inputTextArea").value = '';
    }
    function del() {
let currentValue = inputTextArea.value;
// Check if there is anything to delete
if (currentValue.length > 0) {
    // Remove the last character
    inputTextArea.value = currentValue.slice(0, -1);
}
}


    function ans(){
        let val=inputTextArea.value;
        let arr=val.split(/(\+|\-|\%|\/|\*)/)
        let num1=parseFloat(arr[0]); 
        let delimiter=arr[1]
        let num2=parseFloat(arr[2]);
    let result;
    switch(delimiter){

        case '+':
        result=num1+num2;
        break;
        case '-':
        result=num1-num2;
        break;
        case '*':
        result=num1*num2;
        break;
        case '/':
        result=num1/num2;
        break;       

}
document.getElementById("inputTextArea").value= result;
}
    