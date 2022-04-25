// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let total = localStorage.getItem("amount") || 0;

document.getElementById("wallet").innerText = total;

let movie = JSON.parse(localStorage.getItem("movie"))

let main = document.getElementById("movie");

let div = document.createElement("div");

let img = document.createElement("img");
img.src = movie.Poster;

let title = document.createElement("h2");
title.innerText = movie.Title;

div.append(title,img);

main.append(div);


function bookTicket() {
    
    let num = document.getElementById("number_of_seats").value;

    let tprice = num * 100;
    if (tprice > total) {
        alert('Insufficient Balance!');
    }
    else {
        alert('Booking successful!')
        total = total - tprice;
        localStorage.setItem("amount", total);
        window.location.reload();
    }
}