const apiUrl = "https://www.breakingbadapi.com/api/";

async function getCharacters(callback) {
    let response = await fetch(apiUrl + "characters");
    let data = await response.json();
    let container = document.querySelector(".cast-container");
    for (let i = 0; i < data.length; i++) {
        let article = document.createElement("article");
        article.setAttribute("class", "card-container");
        article.innerHTML = `<div>
          <img src="${data[i].img}"/>
        </div> 

        <div>
         <h3>${data[i].name}</h3>
        <p class="p-nickname">actor:${data[i].portrayed}</p>
          <p class="p-nickname">ocupation: ${data[i].occupation}</p>
           <p class="p-nickname">nickname: ${data[i].nickname}</p>
        </div>`
  
        container.appendChild(article)
    }
    callback();
}

function search() {
   let searchValue = document.querySelector('#searchbar');
   let dataArray = document.querySelectorAll(".card-container")
   let filteredCharacters = []
  searchValue.addEventListener("input", event => {
    console.log(event.target.value)
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].innerText.includes(searchValue.value)){
          filteredCharacters.push(dataArray[i])
        }
    }
  
    console.log(filteredCharacters)
/*     let filteredArr = data.filter(character => character.name === event.target.value) */
  }) 
  
}


window.onload =  function () {
   getCharacters(search);
}