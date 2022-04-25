// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id; 

let total = localStorage.getItem("amount") || 0;

document.getElementById("wallet").innerText = total;

async function searchMovies() {

    try {

        let query = document.getElementById("search").value;

        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=86497aee`);

        const data = await res.json();

        console.log(data.Search);
        return data.Search;
        //append(data.Search);

    } catch (err) {
        console.log("err :", err);
    }
}

let append = (movies) => {

    let main = document.getElementById("movies");

    main.innerHTML = null;

    movies.forEach(({ Poster, Title }) => {

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = Poster;

        let title = document.createElement("h3");
        title.innerText = Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class", "book_now")
        let m = {
            Poster,
            Title
        }
        btn.addEventListener("click", function () {
            addCheckout(m);
        })

        div.append(img, title, btn);

        main.append(div);
    })
}

async function main() {

    let movie_data = await searchMovies();

    if (movie_data == undefined) {
        return
    }
    append(movie_data)
}

function debounce(my, delay) {
    
    if(id) {
        clearTimeout(id);
    }

    id = setTimeout(function(){

        my();

    }, delay);
}

function addCheckout(m) {
    localStorage.setItem("movie", JSON.stringify(m));
    window.location.href = "/checkout.html";
}