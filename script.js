const thunderStormToken = '89a50e74922e4a599686ebd058584fca'

var mymap = L.map('mapid').setView([0.484375,
  25.31491928581316], 3.5);

L.tileLayer(`https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${thunderStormToken}`, {
  maxZoom: 18,
  accessToken: thunderStormToken
}).addTo(mymap);

const colorCodes = {
  5: '#e6194B',
  10: '#f58231',
  20: '#ffe119',
  50: '#bfef45',
  100: '#aaffc3',
  200: '#3cb44b'
}
