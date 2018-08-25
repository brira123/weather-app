function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b4397e351670510cacd5a62924137601&units=metric`,
        success: function(data) {
            console.log(data);

            // let sunrise = data.sys.sunrise;
            // let sunset = data.sys.sunset;
            // let dt = data.dt;
            // let isNight = dt;

            let isNight = data.sys.sunset;

            if ( isNight === new Date() > data.sys.sunset && new Date() < data.sys.sunrise) {
                document.querySelector("body").style.backgroundColor = "black";
                document.querySelector("body").style.color = "white";
            } else {
                new Date();
                document.querySelector("body").style.backgroundColor = "orange";
                document.querySelector("body").style.color = "black";
            }

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
        },
        error: function(err) {
            console.log(err);
        }
    });
    $.ajax({
         url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=xml&appid=b4397e351670510cacd5a62924137601`
    })
}
