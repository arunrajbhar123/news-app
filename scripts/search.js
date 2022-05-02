// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar, sidebar } from "../components/nav.js";
document.querySelector("#navbar").innerHTML = navbar();


let data = JSON.parse(localStorage.getItem("search-news"))
    // document.querySelector("#results").innerHTML = null;
data.forEach(({ title, description, urlToImage }) => {
    let box = document.createElement('div');
    box.setAttribute('class', 'news');
    let img = document.createElement('img');
    let p = document.createElement('h3');
    let des = document.createElement('p');
    img.src = urlToImage;
    p.innerText = title;
    des.innerText = description;
    box.append(img, p, des)
    document.querySelector("#results").append(box);
    var nes = {
        title,
        description,
        urlToImage
    }

    box.onclick = () => {
        localStorage.setItem('news', JSON.stringify(nes));
        window.location.href = "news.html";
    }

})




let startsearch = async(e) => {
    if (e.key == "Enter") {
        let query = document.querySelector("#search_input").value;
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        const data = await res.json();
        console.log(data);
        takestor(data.articles)
    }
}

let takestor = (data) => {
    localStorage.setItem('search-news', JSON.stringify(data));
    window.location.href = "search.html";
}
document.querySelector("#search_input").addEventListener("keydown", startsearch);