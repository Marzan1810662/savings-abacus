function getInputValue(id) {
    const value = parseFloat(document.getElementById('input-' + id).value);
    if (isNaN(value)) {
        if (id == 'income') {
            document.getElementById(id + '-error-msg').innerText = 'field can not be empty for ' + id;
            document.getElementById(id + '-error-msg').style.display = 'block';
        }
        return 0;
    }
    else if (value < 0) {
        document.getElementById(id + '-error-msg').innerText = 'please input positive value for ' + id;
        document.getElementById(id + '-error-msg').style.display = 'block';
        return 0;
    }
    else {
        document.getElementById(id + '-error-msg').style.display = 'none';
        return value;
    }
}

function calculateValue(button) {
    const income = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rent = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');
    const savingPercentage = getInputValue('save-percentage');

    const totalExpense = foodExpense + rent + clothesExpense;
    console.log(totalExpense);

    const balance = income - totalExpense;

    if (button == 'calculate') {
        if (totalExpense > income) {
            document.getElementById('balance-error-msg').innerText = 'Can not spend more than income.'
            document.getElementById('balance-error-msg-div').style.display = 'block';
            document.getElementById('expense-balance-div').style.display = 'none';

        }
        else {
            document.getElementById('total-expenses').innerText = '$' + totalExpense.toFixed(2);
            document.getElementById('balance').innerText = '$' + balance.toFixed(2);
        }
    }
    else {
        const savingAmount = income * (savingPercentage / 100);
        document.getElementById('saving-amount').innerText = '$' + savingAmount;
        if (savingAmount > balance) {
            document.getElementById('savings-error-msg').innerText = 'Can not save more than income.'
            document.getElementById('savings-error-msg-div').style.display = 'block';
            document.getElementById('savings-balance-div').style.display = 'none';
        }
        else {
            const remainingBalance = balance - savingAmount;
            console.log(remainingBalance);
            document.getElementById('remaining-balance').innerText = '$' + remainingBalance;
        }
    }

}

document.getElementById('btn-calculate').addEventListener('click',
    function () {
        calculateValue('calculate');
    });

document.getElementById('btn-save').addEventListener('click',
    function () {
        calculateValue('save');
    });
