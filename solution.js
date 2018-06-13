// function Approch
"use strict" // implement the Javascript Strict Mode which implements the Best coding practise to write JS.
var Bank_Balance = 0;
(function getBankBalance(){
    Bank_Balance = prompt('Enter the Bank Balance Amount');
})(); // IIFE to get user's bank balance 

const phone_base_price = 90.00;
const phone_acc_price = 10.00;
const tax_percent = 5;
var total_price = 0;
var total_paid = 0;
var total_phone_bought = 0;
var tax_total = 0;

//  function calculating the tax on given amount passed in parameter "amt"    
function setTax(amt){
    return amt * tax_percent / 100;
}
// function to calculate the total price of each phone    
function setTotalPrice(){
    tax_total = setTax(phone_base_price + phone_acc_price);
    total_price = phone_base_price + phone_acc_price + tax_total;
}
// function to get formated output
function formatOutput(amt){
    return "$" + parseFloat(amt.toFixed(2));
}
// function display the output stream
function showData(){
    console.log("Total Phones Bought : " + total_phone_bought);
    console.log("Per Unit Cost of Phone : " + formatOutput(total_price));
    console.log("Total Amount Paid :" + formatOutput(total_paid));
    console.log("Remaining Bank Account Balance :" + formatOutput(Bank_Balance));
}
// function to check if the balance in account is enough to buy phone
function checkBalanceMoreThenPrice(){
    if(total_price < Bank_Balance){
        return true;
    }else{
        return false;
    }
}
// Main Function to perform all task    
function buyPhone(){
    setTotalPrice();
    if(checkBalanceMoreThenPrice()){ // check if the balance in account is enough to buy atleast one phone
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

// Executing the program
buyPhone();
