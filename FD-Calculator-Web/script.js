function calcMaturityAmount() {
    // get input
    const princAmntVar = parseFloat(document.getElementById('principle').value);
    const intersRateVar = parseFloat(document.getElementById('interestRate').value);
    const tenureVar = parseFloat(document.getElementById('tenure').value);

    // Perform the calculation
    const maturityVar = princAmntVar + (princAmntVar * intersRateVar * tenureVar) / 100;

    //Now displaying the result
    document.getElementById('resultId').innerText = `Maturity Amount: ${maturityVar.toFixed(2)}`;

}

//Attached the event Listener to the calcualte button
document.getElementById('calculateIdBtn').addEventListener('click', calcMaturityAmount);
