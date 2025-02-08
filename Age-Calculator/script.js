const dobInput = document.getElementById('dobId');
const calcBtn = document.getElementById('calculateBtnId');
const resultDiv = document.getElementById('resultId');

document.getElementById('calculateBtnId').addEventListener('click', function(){
    const dob = new Date(dobInput.value);
    const ageInMs = Date.now() -  dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getFullYear() - 1970);
    /* 
    Think of 1970 as a starting point or "birthday zero" for computers.
     By subtracting it, we get your actual number of years from your birth till today.
    */
    if (age > 1) {
        resultDiv.innerText = `Your age is ${age} years`;
    } else {
        resultDiv.innerText = `Your age is ${age} year`  
    }
});