const apiUrl = "https://www.breakingbadapi.com/api/"

async function apiCallRandom () {

    let response = await fetch(apiUrl + "random-death");
    let data = await response.json();
    console.log(data)    
    let container = document.querySelector(".death-info");
    let articleExist = document.querySelector(".death-container");
    console.log(articleExist)
    if(!articleExist){
    let article = document.createElement("article");
    article.setAttribute("class", "death-container");
    article.innerHTML = `<div>
          <img src="${data.img}"/>
        </div>

        <div>
         <h3>${data.death}</h3>
        <p class="death-stuff">Death: ${data.cause}</p>
          <p class="death-stuff">Last Words: ${data.last_words}</p>
           <p class="death-stuff">Cause: ${data.cause}</p>
           <p class="death-stuff">Killer: ${data.responsible}</p>
        </div>`
    container.appendChild(article);
    } else {
      articleExist.innerHTML = `
        <div>
          <img src="${data.img}"/>
        </div>

        <div>
         <h3>${data.death}</h3>
        <p class="p-nickname">actor:${data.cause}</p>
          <p class="p-nickname">ocupation: ${data.last_words}</p>
           <p class="p-nickname">nickname: ${data.cause}</p>
           <p class="p-nickname">nickname: ${data.responsible}</p>
        </div>
        `
    }
    
}