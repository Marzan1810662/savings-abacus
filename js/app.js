
function getInputValue(id) {
    const value = parseFloat(document.getElementById('input-' + id).value);
    return value;
}

function calculateValue() {
    const income = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rent = getInputValue('rent');
    const clothsExpense = getInputValue('cloths');
    const totalExpense = foodExpense + rent + clothsExpense;

    if(totalExpense > income){
        console.log('expenses can not be greater than income');
    }
    else{
        document.getElementById('total-expenses').innerText = totalExpense.toFixed(2);
    
        const balance = income - totalExpense;
        document.getElementById('balance').innerText = balance.toFixed(2);}
}

document.getElementById('btn-calculate').addEventListener('click',
    function () {
        calculateValue();
    });
