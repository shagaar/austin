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
  navigator.geolocation.getCurrentPosition(onGotPosition, onDidNotGetPostion);
alert('There');
}

function onGotPosition(position)
{
alert('Got Positon');
  document.getElementById("cButton").className = "Blue";
}

function onDidNotGetPosition()
{
alert('Fail');
  document.getElementById("cButton").className = "Red";
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