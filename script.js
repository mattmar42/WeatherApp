$(document).ready(function(){
$('#weather').toggle();
$('#newButton').toggle();

$('#newButton').click(function(){
  $('#newButton').toggle
  $('#weather').hide();
  $('#weatherForm').show();
  $('#instructions').toggle();
  $('#input').val('');
});

$('form').submit(function(evt){
  evt.preventDefault();
  var desiredLoc = $('#input').val();
  $.ajax({
    url : "http://api.wunderground.com/api/cc7d882dc6080fa3/geolookup/conditions/q/" + desiredLoc + ".json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var forecast = '<p>';
    var locCountry = parsed_json['location']['country'];
    var locCity = parsed_json['location']['city'];
    var locTempF = parsed_json['current_observation']['temp_f'];
    var locTempC = parsed_json['current_observation']['temp_c'];
    var forecastText = parsed_json['current_observation']['weather'];
    forecast += 'The current temperature in ' + locCity + ', ' +locCountry + ', ' + ' is: <br>' + locTempF + ' degrees fahrenheit/' + locTempC + 'celsius. <br><br>' + forecastText + '.</p>';
    $('#instructions').toggle();
    $('#weatherForm').toggle();
    $('#weather').toggle().html(forecast);
    $('#newButton').toggle();
  }



        });//AJAX ends

}); //form submit function ends
}); //documentready ends


