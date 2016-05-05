$(document).ready(function(){

$('#button').click(function(){
  var desiredLoc = $('#input').val();
  $.ajax({
    url :     "http://api.wunderground.com/api/cc7d882dc6080fa3/geolookup/conditions/q/" + desiredLoc + ".json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var forecast = '<h1>';
    forecast += parsed_json['location']['zip'];
    forecast += " has a current temperature of: "
    forecast += parsed_json['current_observation']['temp_f']
    forecast += ' Fahrenheit';
    $('#weather').html(forecast);
    }
    });//AJAX ends
}); //onclick function ends
}); //documentready ends


