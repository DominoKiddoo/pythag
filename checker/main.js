var num1Input = document.getElementById("side1");
var num2Input = document.getElementById("side2");
var hypInput = document.getElementById("hyp");
var yn = document.getElementById("answer");

yn.textContent = ""
num1Input.addEventListener('input', (event) => {
    doUpdate();
})

num2Input.addEventListener('input', (event) => {
    doUpdate();
})

hypInput.addEventListener('input', (event) => {
    doUpdate();
})


function doUpdate() {
    if (num2Input.valueAsNumber && num1Input.valueAsNumber && hypInput.valueAsNumber) {
        console.log("not emp")
        doMath();

    } else {
        console.log("emp")
        yn.textContent = ""
    }
}



function doMath() {
    var n1 = num1Input.valueAsNumber
    var n2 = num2Input.valueAsNumber
    var hyp = hypInput.valueAsNumber

    if ((n1 * n1) + (n2 * n2) == (hyp * hyp)) {
        yn.textContent = "YES"
    } else {
        yn.textContent = "NO"
    }

}

