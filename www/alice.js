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

function onDeviceReady()
{
alert('Here');
  navigator.geolocation.getCurrentPosition(onGotPosition, onDidNotGetPostion, {enableHighAccuracy:true});
alert('There');
}

function onGotPosition(position)
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

function onDidNotGetPosition()
{
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
