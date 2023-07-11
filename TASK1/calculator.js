function Solve(value) {
    document.getElementById("res").value += value;
}

// Function to clear the input
function Clear() {
    document.getElementById("res").value = "";
}

// Function to calculate the result
function Result() {
    var input = document.getElementById("res").value;
    // Replace 'x' with '*' for multiplication
    input = input.replace(/x/g, '*');
    var result = eval(input);
    document.getElementById("res").value = result;
}

// Function to remove the last character
function Back() {
    var input = document.getElementById("res").value;
    document.getElementById("res").value = input.slice(0, -1);
}