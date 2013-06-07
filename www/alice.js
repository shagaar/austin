$('#cbutton').click(event, function ()
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
});

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

function onGotAccel(acceleraton)
{
  alert('Acceleration x: ' + acceleration.x + '\n' +
        'Acceleration y: ' + acceleration.y + '\n' +
        'Acceleration z: ' + acceleration.z + '\n' +
        'Timestamp: '      + acceleration.timestamp + '\n');
}

function onDidNotGetAccel()
{
  alert('Acceleration?  what is that?');
}

function slideleft()
{
  $.mobile.changePage('#main-page', {transition : "slide" });
}

$( document ).ready(function() {

  $('#geo-page').bind("swipeleft", function(event) {
    $.mobile.changePage('#main-page');
  });

  $('#photo-page').bind("swipeleft", function() { slideleft(); });

  $('#change-page').bind("swipeleft", function(event) {
    $.mobile.changePage('#main-page', {transition : "flip"});
  });

  $('#adder-page').bind("swipeleft", function() { slideleft(); });

  $('#geoButt').click(function() {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Getting position...<br>';
    navigator.geolocation.getCurrentPosition(onSucc, onErr, {enableHighAccuracy:true});
  });

  $('#addButt').click(function() {
    var x = $('#addend_x').value;
    var y = $('#addend_y').value;
    var s = x+y;
    var sumel = document.getElementById('thesum');
    sumel.innerHTML = '*** ' + s + ' ***<br>'; 
});
