var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getWeather() {
    document.querySelector(".weather-info").style.display = "block";
    const cityName = document.querySelector("input").value;
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b4397e351670510cacd5a62924137601&units=metric`,
        success: function(data) {
            console.log(data);

            let body = document.querySelector("body");
            let date = new Date();
            let dayTime = new Date(data.sys.sunrise * 1000);
            let nightTime = new Date(data.sys.sunset * 1000);

            if (nightTime > date && dayTime < date) {
                $("body").css("background-color", "orange");
                $("body").css("color", "black");
            } else {
                $("body").css("background-color", "black");
                $("body").css("color", "white");
            }

            let icon = data.weather[0].main;

            if (icon === 'Smoke') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-smoke"></i>';
            }
            else if (icon === 'Clouds') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-cloud"></i>';
            }
            else if (icon === 'Rain') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-rain-wind"></i>';
            }
            else if (icon === 'Haze') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-day-haze"></i>';
            }
            else if (icon === 'Clear') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-clear"></i>';
            }
            else if (icon === 'Fog') {
                document.querySelector(".main-icon").innerHTML='<i class="wi wi-night-fog"></i>';
            }
            else {
                document.querySelector(".main-icon").innerHTML='no icon';
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
         url:`https://api.openweathermap.org/data/2.5/forecast?q=karachi,pk&appid=b4397e351670510cacd5a62924137601&units=metric`,
         success: function (data) {
            console.log(data);
         
            var d1 = new Date(data.list[0].dt*1000); 
            var d2 = new Date(data.list[8].dt*1000); 
            var d3 = new Date(data.list[16].dt*1000); 
            var d4 = new Date(data.list[24].dt*1000); 
            var d5 = new Date(data.list[32].dt*1000); 
     
            document.querySelector(".day1").innerHTML = days[d1.getDay()]; 
            document.querySelector(".day2").innerHTML = days[d2.getDay()];        
            document.querySelector(".day3").innerHTML = days[d3.getDay()];        
            document.querySelector(".day4").innerHTML = days[d4.getDay()];  
            document.querySelector(".day5").innerHTML = days[d5.getDay()]; 
    
            document.querySelector(".date-one").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;        
            document.querySelector(".date-two").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}` ;        
            document.querySelector(".date-three").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;        
            document.querySelector(".date-four").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;        
            document.querySelector(".date-five").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;        
    
            document.querySelector(".temperature-one").innerHTML = Math.round(data.list[0].main.temp) + " C°";        
            document.querySelector(".temperature-two").innerHTML = Math.round(data.list[5].main.temp) + " C°";          
            document.querySelector(".temperature-three").innerHTML = Math.round(data.list[13].main.temp) + " C°";         
            document.querySelector(".temperature-four").innerHTML = Math.round(data.list[21].main.temp) + " C°";         
            document.querySelector(".temperature-five").innerHTML = Math.round(data.list[29].main.temp) + " C°";      
        },
        error: function(error){
            console.log(error)
        }
    })
}
