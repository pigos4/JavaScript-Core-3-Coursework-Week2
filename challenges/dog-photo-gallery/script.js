const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
const error = document.getElementById("error");
const li = document.createElement("li");
const img = document.createElement("img");

const fetchData = () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((greeting) => {
      img.src = greeting.message;
      ul.appendChild(li);
      li.appendChild(img);
    })
    .catch((error) => {
      error.innerText = "Error fetching data";
    });
};
btn.addEventListener("click", () => {
  fetchData();
});
