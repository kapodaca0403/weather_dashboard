var savedCity = [];

$(document).ready(function () {
  var city = "";
  $("#citySearch").on("click", function (event) {
    event.preventDefault();
    city = $("#searchCity").val();
    console.log(city);
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c7f970b272893fcb6a52813e083fda4f`;
    $.ajax({
      url: URL,
      method: "GET",
    }).then(function (response) {
      console.log(response.city.name);
      var cityWeather = $("#inputInfo");
      data.forEach(function (cities) {
        saveToStorage(cities);
        var weatherCond = $(`
          <li>city: ${city.name}</li>
          <li>temp: ${city.temp}</li>
          <li>wind: ${city.wind}</li>
          <li>humidty: ${city.humidity}</li>
          `);
        cityWeather.append(weatherCond);

        // weather documents, wind, temp etc
        var cityTitle = $("<h1>").text(response.city.name);
        console.log(cityTitle);
        $("#cityName").append(cityTitle);
      });
    });
  });
  $(document).on("click", "button", function () {
    var city = $(this).text();
    //function to call city forecast
  });
});

// need a header that says weather dashboard. DONE
// need search bar to search for city. DONE
// need to link API
// need to local storage
// need a container that has the search bar for cities
// need a containe for the 5 days forecast
// need a container to add the weather components when clicked on
// weather documents , temp, wind , humidity and uv index
