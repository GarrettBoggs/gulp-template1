var apiKey = "3a48ec39ff16da970bbf5a1726b81ba7";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=' + apiKey, function(response){
      $('.showWeather').text('The humidity in ' + city + " is  "+response.main.humidity +"% give or take 20%...or more");
    });
  });
});
