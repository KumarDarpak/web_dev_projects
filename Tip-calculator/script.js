function calculateTip() {

    let billAmountVar = parseFloat(document.getElementById('billAmountId').value);
    let tipPercentVar = parseFloat(document.getElementById('tipPercentId').value);
    if (isNaN(billAmountVar) || isNaN(tipPercentVar) || billAmountVar <= 0 || tipPercentVar < 0 ) {
        alert('Please Enter a valid Amount for both Fields!!');
        return;
    }
    let tipAmountVar = (billAmountVar * tipPercentVar ) / 100;
    let totalAmountVar = (billAmountVar + tipAmountVar);
    num = tipAmountVar;
    document.getElementById('resultTipAmountId').innerText = `The Tip Amount is ${tipAmountVar.toFixed(2)}`;
    document.getElementById('resultTotalAmountId').innerText = `The total Amount is ${totalAmountVar.toFixed(2)}`;
    
}