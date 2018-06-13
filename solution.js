    // function Approch
    "use strict"
    var Bank_Balance = 0;
    (function getBankBalance(){
        Bank_Balance = prompt('Enter the Bank Balance Amount');
    })();

    const phone_base_price = 90.00;
    const phone_acc_price = 10.00;
    const tax_percent = 5;
    var total_price = 0;
    var total_paid = 0;
    var total_phone_bought = 0;
    var tax_total = 0;

    function setTax(amt){
        return amt * tax_percent / 100;
    }
    function setTotalPrice(){
        tax_total = setTax(phone_base_price + phone_acc_price);
        total_price = phone_base_price + phone_acc_price + tax_total;
    }
    function formatOutput(amt){
        return "$" + parseFloat(amt.toFixed(2));
    }
    function showData(){
        console.log("Total Phones Bought : " + total_phone_bought);
        console.log("Per Unit Cost of Phone : " + formatOutput(total_price));
        console.log("Total Amount Paid :" + formatOutput(total_paid));
        console.log("Remaining Bank Account Balance :" + formatOutput(Bank_Balance));
    }
    function checkBalanceMoreThenPrice(){
        if(total_price < Bank_Balance){
            return true;
        }else{
            return false;
        }
    }
    function buyPhone(){
        setTotalPrice();
        if(checkBalanceMoreThenPrice()){
            while(checkBalanceMoreThenPrice()){
                total_phone_bought ++ ;
                Bank_Balance -= total_price;
                total_paid += total_price;
            }
            showData();
        }else{
            console.log('Not Enough Cash in Bank to Buy One Phone!');
        }
    }
