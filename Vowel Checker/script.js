function checkVowels() {
    var textVar = document.getElementById("inputTextId").value;
    var resultVar = document.getElementById("resultId");
    textVar = textVar.toLowerCase();
    let count = 0;
    for (let i = 0; i < textVar.length; i++) {
        if ( textVar[i] === 'a' || textVar[i] === 'e' || textVar[i] === 'i' || textVar[i] === 'o' || textVar[i] === 'u') {
            count += 1;
        }
    }
    if (count > 1) {
        resultVar.innerText = `Total Vowels are ${count}`;
    } else {
        resultVar.innerText = `Total Vowel is ${count}`;
    }

}