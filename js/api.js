const apiUrl = "https://www.breakingbadapi.com/api/"


async function apiCallRandom () {
    let response = await fetch(apiUrl + "random-death");
    let data = await response.json();
        console.log(data);
}