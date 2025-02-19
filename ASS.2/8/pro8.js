let originalString = "123.45";
function displayConversions() {
    let outputDiv = document.getElementById('output');
    let output = '';

    let original = "123.45";
    output =output+ `Original: "${original}" (${typeof original})\n`;

    let toNumber = Number(original);
    output += `To number: ${toNumber} (${typeof toNumber})\n`;

    let toInteger = parseInt(original);
    output += `To integer: ${toInteger} (${typeof toInteger})\n`;

    let toFloat = parseFloat(original);
    output += `To float: ${toFloat} (${typeof toFloat})\n\n`;

    let originalBooleanString = "true";
    output += `Original: "${originalBooleanString}" (${typeof originalBooleanString})\n`;

    let toBoolean = originalBooleanString.toLowerCase() === "true";
    output += `To boolean: ${toBoolean} (${typeof toBoolean})\n\n`;

    let originalNumber = 123;
    output += `Original: ${originalNumber} (${typeof originalNumber})\n`;
    let toString = originalNumber.toString();
    output += `To string: "${toString}" (${typeof toString})`;
    outputDiv.innerText = output;
}
displayConversions();