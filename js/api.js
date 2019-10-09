const apiUrl = "https://www.breakingbadapi.com/api/"
const proxy = 'https://cors-anywhere.herokuapp.com/'

async function apiCallRandom () {

    let response = await fetch(proxy+apiUrl + "random-death");
    let data = await response.json();
        
    let container = document.querySelector(".death-info");
    let articleExist = document.querySelector(".death-container")  
    console.log(article)
    if(!articleExist){
        let article = document.createElement("article");
    article.setAttribute("class", "death-container");
    article.innerHTML = `<div>
          <img src="${data.img}"/>
        </div>

        <div>
         <h3>${data.death}</h3>
        <p class="p-nickname">actor:${data.cause}</p>
          <p class="p-nickname">ocupation: ${data.last_words}</p>
           <p class="p-nickname">nickname: ${data.cause}</p>
           <p class="p-nickname">nickname: ${data.responsible}</p>
        </div>`
    container.appendChild(article);
    } else {
        article.innerHTML = `<div>
          <img src="${data.img}"/>
        </div>

        <div>
         <h3>${data.death}</h3>
        <p class="p-nickname">actor:${data.cause}</p>
          <p class="p-nickname">ocupation: ${data.last_words}</p>
           <p class="p-nickname">nickname: ${data.cause}</p>
           <p class="p-nickname">nickname: ${data.responsible}</p>
        </div>`
    }
    
}