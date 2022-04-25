// Store the wallet amount to your local storage with key "amount"

let total = localStorage.getItem("amount") || 0;

document.getElementById("wallet").innerText = total;

function addMoney() {
    
    let rupees = document.getElementById("amount").value;

    localStorage.setItem("amount", (+total)+(+rupees));

    total = localStorage.getItem("amount");
    document.getElementById("wallet").innerText = total;
    //console.log(total);
}