// A script to get input into a textfield
// and evaluate calculation

var cvalue;

//Calc Functions
//Clear
function calcClear(){
    document.getElementById("inpt").value = "";
}
//Backsace
function calcBksp(){
    var cvalue = document.getElementById("inpt").value;
    lvalue = cvalue.substring(0,cvalue.length - 1);
    document.getElementById("inpt").value = lvalue;
}
//Plus or minus
function addPlusMinus(){
    var cvalue = document.getElementById("inpt").value;
    var sign = cvalue.substr(0,1);
    var nval = cvalue.substr(1);
    if(sign == "+"){
        cvalue = "-" + nval;
    }
    else if(sign == "-"){
        cvalue = "+" + nval;
    }
    else{
        cvalue = "+" + cvalue;
    }
    document.getElementById("inpt").value = cvalue;
}

//Operator Functions
function addMinus(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("min").value;
    document.getElementById("inpt").value = cvalue;
    //alert(cvalue);
}
function addPlus(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("pl").value;
    document.getElementById("inpt").value = cvalue;
    //alert(cvalue);
}

function addDivide(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("dvd").value;
    document.getElementById("inpt").value = cvalue;
}

function addTimes(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("tm").value;
    document.getElementById("inpt").value = cvalue;
}

//Operand Functions
function addOne(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("one").value;
    document.getElementById("inpt").value = cvalue;
}
function addTwo(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("two").value;
    document.getElementById("inpt").value = cvalue;
}
function addThree(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("th").value;
    document.getElementById("inpt").value = cvalue;
}
function addFour(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue+document.getElementById("fr").value;
    document.getElementById("inpt").value = cvalue;
}
function addFive(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("fv").value;
    document.getElementById("inpt").value = cvalue;
}
function addSix(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue  +document.getElementById("six").value;
    document.getElementById("inpt").value = cvalue;
}
function addSeven(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("sv").value;
    document.getElementById("inpt").value = cvalue;
}
function addEight(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("et").value;
    document.getElementById("inpt").value = cvalue;
}
function addNine(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("nn").value;
    document.getElementById("inpt").value = cvalue;
}
function addZero(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("ze").value;
    document.getElementById("inpt").value = cvalue;
}
function addDot(){
    var svalue = document.getElementById("inpt").value;
    cvalue = svalue + document.getElementById("dot").value;
    document.getElementById("inpt").value = cvalue;
}

//Evaluation function
function evaluateExpression(){
    var chars = cvalue.split("");
    var n = [];
    var op = [];
    var index = 0;
    var oplast = true;
    n[index] = "";
    
    //parse expression
    for (var i = 0; i < chars.length; i++) {
        if (isNaN(parseInt(chars[i])) && chars[i] !== "." && !oplast) {
            op[index] = chars[i];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[i];
            oplast = false;
        }
    }
    // Calculate the expression
    cvalue = parseFloat(n[0]);
    for (var j = 0; j < op.length; j++) {
        var num = parseFloat(n[j + 1]);
        var addition = document.getElementById("pl").value;
        var subtraction = document.getElementById("min").value;
        var division = document.getElementById("dvd").value;
        var multiplication = document.getElementById("tm").value;
        switch (op[j]) {
            case addition:
                cvalue = cvalue + num;
                break;
            case subtraction:
                cvalue = cvalue - num;
                break;
            case multiplication:
                cvalue = cvalue * num;
                break;
            case division:
                cvalue = cvalue / num;
                break;
        }
    }
    document.getElementById("inpt").value = cvalue;
}