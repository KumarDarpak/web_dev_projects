const includeLower = "abcdefghijklmnopqrstuvwxyz";
const includeUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includeNumber = "0123456789";
const includeSymbol = `!@#$%^&*()_+-={}[]|\\:"<>?;',./`;

const passwordLenVar = document.getElementById('passLengthId');
const lowerCaseVar = document.getElementById('lowerCaseId');
const upperCaseVar = document.getElementById('upperCaseId');
const numberVar = document.getElementById('numberId');
const symbolVar = document.getElementById('symbolId');
const generateButtonVar = document.getElementById('generateButtonId');
const textInputVar = document.getElementById('textId');




generateButtonVar.addEventListener("click", function(){
    const length = passwordLenVar.value;
    let characters = "";
    let password = "";

    if (lowerCaseVar.checked) {
        characters += includeLower;
    }
    if (upperCaseVar.checked) {
        characters += includeUpper;
    }
    if (numberVar.checked) {
        characters += includeNumber;
    }
    if (symbolVar.checked) {
        characters += includeSymbol;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    textInputVar.value = password;

});