var customerSpentAmount = [450, 80, 790, 1252]

var totalAmountSpent = customerSpentAmount.reduce((prevval, currentval) =>{
    console.log(prevval,currentval); 
    return prevval + currentval
})

console.log(totalAmountSpent);
