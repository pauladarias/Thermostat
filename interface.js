$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }


  $('#current-city').change(function() {
    var city = $('#current-city').val();                                       
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6363c4f98af6f295b3f9173565b91b73&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=6363c4f98af6f295b3f9173565b91b73';
  //   var units = '&units= metric';
  //   $.get(url + token + units, function(data){
  //     $('#current-temperature').text(data.main.temp);
  //   })
  // }
});
