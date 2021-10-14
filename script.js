const JokeElement = document.getElementById("joke")
const JokeBtn = document.getElementById("jokeBtn")

generateJoke()



async function generateJoke() {

    // FETCH
    // fetch("https://icanhazdadjoke.com", { headers: { "Accept": "application/json" } })
    //     .then(res => res.json())
    //     .then(data => JokeElement.innerHTML = data.joke)

    // Async Await

    // have to await fetch. Then make function we are inside of async bc we are using await
    const res = await fetch("https://icanhazdadjoke.com", { headers: { "Accept": "application/json" } })
    const data = await res.json()
    JokeElement.innerHTML = data.joke

}


JokeBtn.addEventListener("click", generateJoke)