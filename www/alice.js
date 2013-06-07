function changeButton ()
{
  var r = Math.floor(Math.random()*3)+1;
  var c;

  switch(r)
  {
    case 1:
      c="Red";
      break;
    case 2:
      c="Blue";
      break;
    case 3:
      c="Grey";
      break;
  }
  
  var b = document.getElementById("cButton");
  b.className = c;
}

function geoButton()
{
  var element = document.getElementById('geolocation');
  element.innerHTML = 'Getting position...<br>';
  navigator.geolocation.getCurrentPosition(onSucc, onErr, {enableHighAccuracy:true});
}

function onSucc(position)
{
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
}

function onErr()
{
  var element = document.getElementById('geolocation');
  element.innerHTML = 'Failed to get geographic location<br>';

        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
}

function slideleft() {
  $.mobile.changePage('#main-page', { transition : "slide" });
}

$(document).ready(function() {
  $('#change-page').bind("slideleft", function() { slideleft(); });
  $('#geo-page').bind("slideleft", function() { slideleft(); });
  $('#photo-page').bind("slideleft", function() { slideleft(); });
  $('#adder-page').bind("slideleft", function() { slideleft(); });
  
  $('#geoButt').click(function() {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Getting position...<br>';
    navigator.geolocation.getCurrentPosition(onSucc, onErr, {enableHighAccuracy:true});
  });
}
