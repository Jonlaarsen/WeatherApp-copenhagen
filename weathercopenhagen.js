let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=678a37326b918bb23b524b306b1532aa&units=metric"

const weatherIcon = document.querySelector(".weatherIcon");

function checkWeather(){

fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=678a37326b918bb23b524b306b1532aa&units=metric", {
  })
.then(res => res.json())
.then(data => {
    console.log(data)
    showWeather(data)
})

.catch(err => {
  console.error(err);
})

function showWeather(data){   

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "p0";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png"
   }
   else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun.png"
   }
   else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy.png"
   }
   else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "cloudy-2.png"
   }
   else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snowy.png"
   }  
      
}; 
};
function timeDate(){
    let date = new Date();
   let newDate =  new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
   let copenhagenDate= new Date(newDate.valueOf() + 7200000).toLocaleString();
    document.querySelector(".dateTime").innerHTML = copenhagenDate;
  
};

checkWeather(); 

setInterval(timeDate, 1000)
setInterval(checkWeather, 72000)





 