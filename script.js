async function start() {
    const apikey = '4f2713ea775d5dfbf05c6e251187f425';
    const city = document.querySelector(".city-input").value;
    try {
        // console.log(city)
        const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
        if (!apiUrl.ok) {
            throw Error(`Forecast API error: ${apiUrl.status} ${apiUrl.statusText}`);
        }
        const apiUrlCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric
`);
        if (!apiUrlCurrent.ok) {
            throw Error(`Forecast API error: ${apiUrl.status} ${apiUrl.statusText}`);
        }
        let data = await apiUrl.json();
        let dataCurrent = await apiUrlCurrent.json();
        // console.log(data);

        document.querySelector(".city-name").innerHTML = city;
        let temp = dataCurrent.main.temp;               //==
        // console.log(temp)
        let temperature = document.querySelector(".temperature").innerHTML = `${temp} °C`;
        let weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.src = getTemperatureIcon(temp);
        let description = document.querySelector(".description").innerHTML = `${dataCurrent.weather[0].description}`;//==
        //======================================
        const forecastItem = document.querySelectorAll(".forecast-item");
        // console.log(forecastItem)

        const forecast = data.list.slice(0, 8);
        forecast.forEach((value, index, list) => {
            let time = value.dt_txt.split(" ");
            time = time[1].slice(0, 5);     //get time 
            // console.log(time);
            let pTag = forecastItem[index].querySelectorAll("p");
            temp = data.list[index].main.temp;
            pTag[0].innerHTML = time;
            pTag[1].innerHTML = `${temp} °C`;

            //=================
            forecastItem[index].querySelector("img").src = getTemperatureIcon(temp);

        })
    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
};
function getTemperatureIcon(temp) {
    if (temp <= 0) {
        return `https://cdn-icons-png.flaticon.com/512/642/642102.png`;
    } else if (temp >= 1 && temp <= 10) {
        return "https://cdn-icons-png.flaticon.com/512/2920/2920250.png";
    } else if (temp >= 11 && temp <= 20) {
        return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    } else if (temp >= 21 && temp <= 30) {
        return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    } else if (temp >= 31 && temp <= 40) {
        return "https://cdn-icons-png.flaticon.com/512/4814/4814268.png";
    } else {
        return "https://cdn-icons-png.flaticon.com/512/1684/1684375.png";
    }
}
document.querySelector(".search-btn").addEventListener("click", () => {
    start();
})
