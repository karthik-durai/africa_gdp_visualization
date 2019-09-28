const thunderStormToken = '89a50e74922e4a599686ebd058584fca'

var mymap = L.map('mapid').setView([0.484375,
  25.31491928581316], 3.5);

L.tileLayer(`https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${thunderStormToken}`, {
  maxZoom: 18,
  accessToken: thunderStormToken
}).addTo(mymap);

