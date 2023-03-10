const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const apiKey = "goBT/29ceoNG3OsExyTjZA==Iar6iWYbnQcVDIdY";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        joke.innerText = "Updating...";
        btn.disabled = true;
        btn.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btn.disabled = false;
        btn.innerText = "Tell me a joke";
        joke.innerText = data[0].joke;
        
    } catch (error) {
        joke.innerText = "An error happened, try again later";
        btn.disabled = false;
        btn.innerText = "Tell me a joke";
    }
    
}

btn.addEventListener('click', getJoke);