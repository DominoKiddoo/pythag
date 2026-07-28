var num1Input = document.getElementById("side1");
var num2Input = document.getElementById("side2");
var typeSelector = document.getElementById("stype");
var workingOut = document.getElementById("workingOut")

workingOut.hidden = true;

num1Input.addEventListener('input', (event) => {
    doUpdate();
})

num2Input.addEventListener('input', (event) => {
    doUpdate();
})

typeSelector.addEventListener('input', (event) => {
    doUpdate();
})

function doUpdate() {
    if (num2Input.valueAsNumber && num1Input.valueAsNumber) {
        console.log("not emp")
        workingOut.hidden = false;

        doMath();

    } else {
        console.log("emp")
        workingOut.hidden = true;
    }
}


var l1 = document.getElementById("l1") // x = N/A + N/A
var l2 = document.getElementById("l2") // x = N/A
var l3 = document.getElementById("l3") // x = sqrt(N/A)
var l4 = document.getElementById("l4") // x = N/A



function doMath() {

    var n1 = num1Input.valueAsNumber;
    var n2 = num2Input.valueAsNumber;
    console.log(n1)

    var type = typeSelector.value;
    console.log(type);


    if (type == "y") {
        l1.textContent = "x² = " + n1.toString() + "² + " + n2.toString() + "²";

        var addedIt = (n1 * n1) + (n2 * n2);
    
        l2.textContent = "x² = " + addedIt.toString();
    
        l3.textContent = "x = √" + addedIt.toString();
    
    
        var finalAnswer = Math.sqrt(addedIt);
        l4.textContent = "x = " + finalAnswer.toString();
    
    } else {
        var addedIt = 0;

        if (n1 > n2) {
            l1.textContent = "x² = " + n1.toString() + "² - " + n2.toString() + "²";
            addedIt = (n1 * n1) - (n2 * n2);

        } else if (n1 < n2) {
            l1.textContent = "x² = " + n2.toString() + "² - " + n1.toString() + "²";
            addedIt = (n2 * n2) - (n1 * n1);

        } else {
            l1.textContent = "x² = " + n1.toString() + "² - " + n2.toString() + "²";
            addedIt = (n1 * n1) - (n2 * n2);
        }

        
    
        l2.textContent = "x² = " + addedIt.toString();
    

        l3.textContent = "x = √" + addedIt.toString();
    
    
        var finalAnswer = Math.sqrt(addedIt);
        l4.textContent = "x = " + finalAnswer.toString();
    
    }


}

