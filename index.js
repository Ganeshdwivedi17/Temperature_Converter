document.getElementById("convert").addEventListener("click",calculatetemp);
document.getElementById("reset").addEventListener("click",reset);

var inputBox = document.getElementById("input-box");
var select = document.querySelector("select");
var Option = document.querySelector("select #option1");

var result = document.getElementById("result");
let sp = document.createElement("span");

function calculatetemp() {

    

    if (Option.selected === true) {
        sp.innerHTML = (((inputBox.value-32)*5)/9) + (" <sup>°</sup>C");
    } else{
        sp.innerHTML = (((inputBox.value*9)/5)+32)+(" <sup>°</sup>F");
    }

    result.appendChild(sp);
    }
    function reset(){
        inputBox.value="";
        sp.innerHTML = "";
    }