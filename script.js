$(document).ready(function(){
$('#weather').toggle();

$('form').submit(function(evt){
  evt.preventDefault();
  var desiredLoc = $('#input').val();
  $.ajax({
    url :     "http://api.wunderground.com/api/cc7d882dc6080fa3/geolookup/conditions/q/" + desiredLoc + ".json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var forecast = '<p>';
    var locCountry = parsed_json['location']['country'];
    var locState = parsed_json['location']['state'];
    var locCity = parsed_json['location']['city'];
    var locZip = parsed_json['location']['zip'];
    var locTempF = parsed_json['current_observation']['temp_f'];
    var locTempC = parsed_json['current_observation']['temp_c'];
    forecast += 'The current temperature in ' + locCity + ', ' +locCountry + ', ' + ' is: ' + locTempF + ' fahrenheit/' + locTempC + ' celsius.';
    $('#instructions').toggle();
    $('#weather').toggle().html(forecast);
    }

        });//AJAX ends
}); //onclick function ends
}); //documentready ends


