// Ude Import export (MANDATORY)
// detailed_news 
//  title,
// description,
// urlToImage

// import { navbar, sidebar } from "../components/nav.js";

// document.querySelector("#navbar").innerHTML = navbar();

import { navbar, sidebar } from "../components/nav.js";
document.querySelector("#navbar").innerHTML = navbar();

let getdata = JSON.parse(localStorage.getItem('news'));
// console.log(getdata);
for (let key in getdata) {
    // console.log(getdata.title)
    var box = document.createElement('div');
    var img = document.createElement('img');
    var p = document.createElement('h3');
    var des = document.createElement('p');
    img.src = getdata.urlToImage;
    p.innerText = getdata.title;
    des.innerHTML = getdata.description;
    box.append(img, p, des);
}

document.querySelector("#detailed_news ").append(box)

// console.log(getdata);



// let startsearch = async(e) => {
//     if (e.key == "Enter") {
//         let query = document.querySelector("#search_input").value;
//         const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
//         const data = await res.json();
//         takestor(data.articles)
//     }
// }

// let takestor = (data) => {
//     localStorage.setItem('search-news', JSON.stringify(data));
//     window.location.href = "search.html";
// }
// document.querySelector("#search_input").addEventListener("keydown", startsearch);