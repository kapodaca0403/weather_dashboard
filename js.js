$(document).ready(function () {
  // var date = moment().format("MM/DD/YYYY");
  var cityEl = document.querySelector("#cityName")
  var tempEl = document.querySelector("#currWet")
  var humidEl = document.querySelector("#currHum")
  var windEl = document.querySelector("#currWin")
  var UVel = document.querySelector("#currUv")
  var daytemp = document.querySelector("#dayTemp");
  var dayhum = document.querySelector("#dayHum");
  var daywind = document.querySelector("#dayWind");
  var dayUV = document.querySelector("#dayUv");

  function fetchWeather(city) {
    var lat  = city.coord.lat ;
    var lon = city.coord.lon;
  

  // city.coord.lat =
    var citName = city.name;
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=c7f970b272893fcb6a52813e083fda4f`;

    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {

        //assigning city name to city element as a value
        cityEl.innerText=citName
     
        // date.innerText=citName
        
        console.log(data);
        tempEl.innerText= data.current.temp;
        humidEl.innerText=data.current.humidity
        windEl.innerText=data.current.wind_speed
        UVel.innerText=data.current.uvi; 
        daytemp.innerText = data.daily[0].temp; 
        dayhum.innerText = data.daily.humidity; 
        daywind.innerText = data.daily.wind_speed; 
        dayUV.innerText = data.daily.uvi; 
                



        // renderItems(city, data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = "" + d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return (formattedDate = year + month + day);
}


  
  $("#citySearch").on("click", function (event) {
    event.preventDefault();
    let city = $("#searchCity").val();
    console.log(city);
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c7f970b272893fcb6a52813e083fda4f`;
    $.ajax({
      url: URL,
      method: "GET",
    }).then(function (response) {
      console.log(response)
      fetchWeather(response.city) 
      formatDate(); 
     
      });
    });






  });
  
// }); 


// var key = "c7f970b272893fcb6a52813e083fda4f"; 
// var fiveday = ""
  
// https://api.openweathermap.org/data/2.5/forecast?q=$Denver&units=imperial&appid=c7f970b272893fcb6a52813e083fda4f




// need a header that says weather dashboard. DONE
// need search bar to search for city. DONE
// need to link API -- DONE
// need to local storage
// need a container that has the search bar for cities -- DONE
// need a containe for the 5 days forecast -- DONE
// need a container to add the weather components when clicked on -- DONE
// weather documents , temp, wind , humidity and uv index
