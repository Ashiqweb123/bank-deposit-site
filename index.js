//deposit added------------>

const depositBtn = document.getElementById('deposit-btn').addEventListener('click', function() {

    const deposit = document.getElementById('deposit');
    const depositText = deposit.innerText;
    const depositNum = parseFloat(depositText);

    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountNum = depositAmount.value;
    const newDepositAmountNum = parseFloat(depositAmountNum);
    deposit.innerText = depositNum + newDepositAmountNum;
    depositAmount.value = '';

    //update-balance-------------->
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceNum = parseFloat(currentBalanceText);
    currentBalance.innerText = currentBalanceNum + newDepositAmountNum;
})



// withdraw added---------------->

const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdraw = document.getElementById('withdraw');
    const withdrawText = withdraw.innerText;
    const withdrawNum = parseFloat(withdrawText);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountNum = withdrawAmount.value;
    const newwithdrawAmountNum = parseFloat(withdrawAmountNum);
    withdraw.innerText = withdrawNum + newwithdrawAmountNum;
    withdrawAmount.value = '';

    //update-balance-------------->
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceNum = parseFloat(currentBalanceText);

    //Rest-balace-after-withdraw--------->
    currentBalance.innerText = currentBalanceNum - newwithdrawAmountNum;
})