//check if input values are negative
function checkValue(id) {
    const value = parseFloat(document.getElementById('input-' + id).value);
    if (value < 0) {
        if (id == 'income') {
            document.getElementById(id + '-error-msg').innerText = 'please input positive value for saving percentage ';
            document.getElementById(id + '-error-msg').style.display = 'block';
            document.getElementById('btn-calculate').disabled = true;
            document.getElementById('btn-save').disabled = true;
        }
        else if (id == 'save-percentage') {
            document.getElementById(id + '-error-msg').innerText = 'please input positive value for saving percentage ';
            document.getElementById(id + '-error-msg').style.display = 'block';
            document.getElementById('btn-save').disabled = true;
        }
        else {
            document.getElementById(id + '-error-msg').innerText = 'please input positive value for ' + id;
            document.getElementById(id + '-error-msg').style.display = 'block';
            document.getElementById('btn-calculate').disabled = true;
        }
    }
    else {
        document.getElementById(id + '-error-msg').style.display = 'none';
        document.getElementById('btn-calculate').disabled = false;
        document.getElementById('btn-save').disabled = false;
    }
}
//get values from input
function getInputValue(id) {
    const value = parseFloat(document.getElementById('input-' + id).value);
    //validation for empty input
    if (isNaN(value)) {
        if (id == 'income') {
            document.getElementById(id + '-error-msg').innerText = 'field can not be empty for ' + id;
            document.getElementById(id + '-error-msg').style.display = 'block';
            return '';
        }
        else if (id == 'save-percentage') {
            document.getElementById(id + '-error-msg').innerText = 'field can not be empty for saving percentage';
            document.getElementById(id + '-error-msg').style.display = 'block';
            return '';
        }
        else {
            return 0;
        }
    }
    else {
        return value;
    }
}

//calculate balance and savings
function calculateValue(button) {
    const income = getInputValue('income');
    const foodExpense = getInputValue('food');
    const rent = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');
    
    const totalExpense = foodExpense + rent + clothesExpense;
    const balance = income - totalExpense;
    //error message for emput income input
    if (income == '') {
        document.getElementById('total-expenses').innerText = '$' + income;
        document.getElementById('balance').innerText = '$' + income;
        return;
    }
    //calculate total expense and balance
    if (button == 'calculate') {
        document.getElementById('input-save-percentage').value = '';
        document.getElementById('saving-amount').innerText = '$';
        document.getElementById('remaining-balance').innerText = '$';
        document.getElementById('savings-error-msg-div').style.display = 'none';
        document.getElementById('savings-balance-div').style.display = 'block';
        if (income < 0 || foodExpense < 0 || rent < 0 || clothesExpense < 0) {
            document.getElementById('total-expenses').innerText = '$';
            document.getElementById('balance').innerText = '$';
            return;
        }
        else if (totalExpense > income) {
            document.getElementById('balance-error-msg').innerText = 'Can not spend more than income.'
            document.getElementById('balance-error-msg-div').style.display = 'block';
            document.getElementById('expense-balance-div').style.display = 'none';

        }
        else {
            document.getElementById('balance-error-msg-div').style.display = 'none';
            document.getElementById('expense-balance-div').style.display = 'block';
            document.getElementById('total-expenses').innerText = '$' + totalExpense.toFixed(2);
            document.getElementById('balance').innerText = '$' + balance.toFixed(2);

        }
    }
    //calculate savings and remaining balance
    else {
        const savingPercentage = getInputValue('save-percentage');
        if (savingPercentage == '') {
            document.getElementById('saving-amount').innerText = '$';
            document.getElementById('remaining-balance').innerText = '$';

            return;
        }
        const savingAmount = income * (savingPercentage / 100);
        document.getElementById('saving-amount').innerText = '$' + savingAmount;
        if (savingAmount > balance) {
            document.getElementById('savings-error-msg').innerText = 'Can not save more than balance.'
            document.getElementById('savings-error-msg-div').style.display = 'block';
            document.getElementById('savings-balance-div').style.display = 'none';
        }
        else {
            const remainingBalance = balance - savingAmount;
            document.getElementById('remaining-balance').innerText = '$' + remainingBalance;
            document.getElementById('savings-error-msg-div').style.display = 'none';
            document.getElementById('savings-balance-div').style.display = 'block';
        }
    }

}
//click handler for calculate button 
document.getElementById('btn-calculate').addEventListener('click',
    function () {
        calculateValue('calculate');
    });

//click handler for save butoon
document.getElementById('btn-save').addEventListener('click',
    function () {
        calculateValue('save');
    });

// reset all fields
document.getElementById('btn-reset').addEventListener('click',
    function () {
        const inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            input.value = '';
        }
        document.getElementById('total-expenses').innerText = '$';
        document.getElementById('balance').innerText = '$';

        document.getElementById('saving-amount').innerText = '$';
        document.getElementById('remaining-balance').innerText = '$';

        document.getElementById('income-error-msg').style.display = 'none';
        document.getElementById('food-error-msg').style.display = 'none';
        document.getElementById('rent-error-msg').style.display = 'none';
        document.getElementById('clothes-error-msg').style.display = 'none';
        document.getElementById('save-percentage-error-msg').style.display = 'none';

        document.getElementById('balance-error-msg-div').style.display = 'none';
        document.getElementById('savings-error-msg-div').style.display = 'none';

        document.getElementById('btn-calculate').disabled = false;
        document.getElementById('btn-save').disabled = false;
    });