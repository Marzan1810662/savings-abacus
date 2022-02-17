
function getInputValue(id) {
    const value = parseFloat(document.getElementById('input-' + id).value);
    if (isNaN(value)) {
        return 0;
    }
    else if (value < 0) {
        document.getElementById(id + '-error-msg').innerText = 'please input positive value for ' + id;
        document.getElementById(id + '-error-msg').style.display = 'block';
        return 0;
    }
    else {
        return value;
    }
}

function calculateValue() {
    const income = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rent = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');
    const savingPercentage = getInputValue('save');

    const totalExpense = foodExpense + rent + clothesExpense;
    
    const balance = income - totalExpense;

    if (totalExpense > income) {
        console.log('expenses can not be greater than income');
        document.getElementById('balance-error-msg').innerText = 'Can not spend more than income.'
        document.getElementById('balance-error-msg-div').style.display = 'block';
        document.getElementById('expense-balance-div').style.display = 'none';

    }
    else {
        document.getElementById('total-expenses').innerText = totalExpense.toFixed(2);
        document.getElementById('balance').innerText = balance.toFixed(2);
    }

    const savingAmount = income * (savingPercentage / 100);
    document.getElementById('saving-amount').innerText = savingAmount;

    const remainingBalance = balance - savingAmount;
    console.log (remainingBalance);
    document.getElementById('remaining-balance').innerText = remainingBalance;

}

document.getElementById('btn-calculate').addEventListener('click',
    function () {
        calculateValue();
    });

document.getElementById('btn-save').addEventListener('click',
    function () {
        //console.log('saved cilcked');
        calculateValue();
    });
