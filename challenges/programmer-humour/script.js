const img = document.getElementById("img");
const error = document.getElementById("error");

const url = `https://xkcd.now.sh/?comic=latest`;

const fetchData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data.img;
    })
    .catch((error) => {
      error.innerText = "Error fetching data";
    });
};
fetchData();
