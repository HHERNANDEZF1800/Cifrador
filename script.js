function encriptar() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        outputText += String.fromCharCode(charCode + 1);
    }

    document.getElementById("outputText").textContent = outputText;
}

function desencriptar() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        outputText += String.fromCharCode(charCode - 1);
    }

    document.getElementById("outputText").textContent = outputText;
}