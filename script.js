// get elements
const joke = document.querySelector("#joke");
const btn = document.querySelector("button");

// variables
const apiKey = "use your API key here";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// functions
async function fetchJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();
  return data[0].joke;
}
async function handleClick() {
  joke.textContent = "Updating...";
  joke.textContent = await fetchJoke();
}
// eventListeners
btn.addEventListener("click", handleClick);
