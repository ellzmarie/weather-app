
const submitBtn = document.querySelector("button");
const inputBox = document.querySelector("input");
const weatherFor = document.querySelector("weatherFor")
const getTemp = document.querySelector("temp") 
const feelsLike = document.querySelector("feels")
const weatherDesc = document.querySelector("weatherDesc")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputBox.value)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=${inputBox.value}`)
    .then((id) => id.json())
    .then((data) => {
        console.log(data)
        cityName.innerText = data.name
    })
    .catch((err) => console.log(err));
});
