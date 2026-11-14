import { animate } from "motion";

let array = [4, 7, 5, 4, 5];
let div = document.querySelector('.this');
const boxes = document.querySelectorAll(".this")

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}


async function showPosts() {
    const data = await getPosts();
    for (let index = 0; index < data.length; index++) {
            
            div.innerHTML += `
                <div class="block">
                    <h5>${data[index].title}</h5>
                    <p>${data[index].body}</p>
                </div>
            `;
    }
}

showPosts();

animate(
        ".box",
        { rotate: 90 },
        { type: "spring", repeat: Infinity, repeatDelay: 0.2 }
    )