let F;
let C;
document.getElementById("btn").onclick = function() {
    C = document.getElementById("input").value;
    F = ((C / 5) * 9) + 32;
    document.getElementById("output").innerHTML = `It is ${C}C and ${F.toFixed(2)}F`;
}