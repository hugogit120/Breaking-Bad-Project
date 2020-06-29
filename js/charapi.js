const apiUrl = "https://www.breakingbadapi.com/api/";
let data = [];
let filteredData;

async function getCharacters() {
    let response = await fetch(apiUrl + "characters");
    data = await response.json();
    filteredData = data

    return printCharacters()
}

function printCharacters() {
  let container = document.querySelector(".cast-container");
  container.innerHTML = '';
    for (let i = 0; i < filteredData.length; i++) {
    
        let article = document.createElement("article");
        article.setAttribute("class", "card-container");
        article.innerHTML = `<div>
          <img src="${filteredData[i].img}"/>
        </div> 

        <div>
         <h3>${filteredData[i].name}</h3>
        <p class="p-nickname">actor:${filteredData[i].portrayed}</p>
          <p class="p-nickname">ocupation: ${filteredData[i].occupation}</p>
           <p class="p-nickname">nickname: ${filteredData[i].nickname}</p>
        </div>`
      
      container.appendChild(article)
    }
  
}

function onSearchChange(event) {
  const searchBox = event.target.value;
  filteredData = data.filter(characterName => {
    return characterName.name.toLowerCase().includes(searchBox.toLowerCase())
  });

  printCharacters()
}


window.onload =  function () {
  getCharacters();
  const searchBox = document.querySelector('#searchbar')
  searchBox.addEventListener('input', onSearchChange)
}