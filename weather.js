let apiKey = "54de4f7ef7201f2182766864e95afdba";

function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found ❌";
                return;
            }

            let temp = data.main.temp;
            let weather = data.weather[0].main;

            document.getElementById("result").innerHTML = 
                `City: ${city} <br> Temperature: ${temp}°C <br> Weather: ${weather}`;
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "Error fetching data";
        });
}