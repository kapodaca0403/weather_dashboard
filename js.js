$(document).ready(function () {
  var date = moment().format("MM/DD/YYYY");

  var cityEl = document.querySelector("#cityName");
  var tempEl = document.querySelector("#currWet");
  var humidEl = document.querySelector("#currHum");
  var windEl = document.querySelector("#currWin");
  var UVel = document.querySelector("#currUv");
  var container = document.querySelector(".Fiveday-container"); //. means class
  var currentDate = document.querySelector("#currentdate");



    
  
  function fetchWeather(city) {
    var lat = city.coord.lat;
    var lon = city.coord.lon;
    // var forecast = city.daily[""];

    // city.coord.lat =
    var citName = city.name;
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=c7f970b272893fcb6a52813e083fda4f`;

    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        //assigning city name to city element as a value
        cityEl.innerText = citName;
       

        // date.innerText=citName

        console.log(data);
        tempEl.innerText = data.current.temp;
        humidEl.innerText = data.current.humidity;
        windEl.innerText = data.current.wind_speed;
        UVel.innerText = data.current.uvi;
        currentDate.innerText = date;

        var dayone = ``;

        for (let i = 0; i < data.daily.length; i++) {
          dayone += ` <div class="row row-cols-1 row-cols-md-3 g-4" style="float: right" >
          <div class="col" style="width:225px" >
          <div class="card" style="display:inline-block">
       
          <div class="card-body" >
     
   
          <p>Temp:${data.daily[i].temp.day}</p>
          <p id="dayTemp"></p>
          
          <p>Wind:${data.daily[i].wind_speed}</p>
          <p id="dayWind"></p>
          
          <p>Humidity:${data.daily[i].humidity}</p>
          <p id="dayHum"></p>
          
          <p>UV:${data.daily[i].uvi}</p>
          <p id="dayUv"></p>
          
        
          </div>
          </div>
          </div>
          </div>
          `;
        }
        container.innerHTML = dayone;
        
        
      })
      .catch(function (err) {
        console.error(err);
      });
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
      console.log(response);
      fetchWeather(response.city);
    });
  });
});

// need a header that says weather dashboard. DONE
// need search bar to search for city. DONE
// need to link API -- DONE
// need to local storage
// need a container that has the search bar for cities -- DONE
// need a containe for the 5 days forecast -- DONE
// need a container to add the weather components when clicked on -- DONE
// weather documents , temp, wind , humidity and uv index
