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

function determineColor(value) {
  value = Number(value)
  if (value > 200) return '#3cb44b'
  const colorCodeKeys = Object.keys(colorCodes)
  for (let i = 0; i < colorCodeKeys.length; i++) {
    const code = colorCodeKeys[i]
    if (value <= code) {
      return colorCodes[code]
    }
  }
}

const africaCoords = { 'Angola': { 'coords': ['-11.202692', '17.873887'], 'gdp': '92.191' }, 'Burkina Faso': { 'coords': ['12.238333', '-1.561593'], 'gdp': '14.882' }, 'Burundi': { 'coords': ['-3.373056', '29.918886'], 'gdp': '3.573' }, 'Benin': { 'coords': ['9.30769', '2.315834'], 'gdp': '11.184' }, 'Botswana': { 'coords': ['-22.328474', '24.684866'], 'gdp': '19.651' }, 'Congo [DRC]': { 'coords': ['-4.038333', '21.758664'], 'gdp': '45.252' }, 'Central African Republic': { 'coords': ['6.611111', '20.939444'], 'gdp': '2.285' }, 'Congo [Republic]': { 'coords': ['-0.228021', '15.827659'], 'gdp': '0.477' }, 'Cameroon': { 'coords': ['7.369722', '12.354722'], 'gdp': '2.042' }, 'Cape Verde': { 'coords': ['16.002082', '-24.013197'], 'gdp': '39.219' }, 'Djibouti': { 'coords': ['11.825138', '42.590275'], 'gdp': '48.458' }, 'Algeria': { 'coords': ['28.033886', '1.659626'], 'gdp': '183.687' }, 'Egypt': { 'coords': ['26.820553', '30.802498'], 'gdp': '2.392' }, 'Western Sahara': { 'coords': ['24.215527', '-12.885834'], 'gdp': '30.368' }, 'Eritrea': { 'coords': ['15.179384', '39.782334'], 'gdp': '12.432' }, 'Ethiopia': { 'coords': ['9.145', '40.489673'], 'gdp': '4.662' }, 'Gabon': { 'coords': ['-0.803689', '11.609444'], 'gdp': '90.968' }, 'Ghana': { 'coords': ['7.946527', '-1.023194'], 'gdp': '68.258' }, 'Gambia': { 'coords': ['13.443182', '-15.310139'], 'gdp': '16.709' }, 'Guinea': { 'coords': ['9.945587', '-9.696645'], 'gdp': '12.623' }, 'Equatorial Guinea': { 'coords': ['1.650801', '10.267895'], 'gdp': '299.589' }, 'Guinea-Bissau': { 'coords': ['11.803749', '-15.180413'], 'gdp': '1.538' }, 'Kenya': { 'coords': ['-0.023559', '37.906193'], 'gdp': '2.811' }, 'Comoros': { 'coords': ['-11.875001', '43.872219'], 'gdp': '0.726' }, 'Liberia': { 'coords': ['6.428055', '-9.429499'], 'gdp': '44.964' }, 'Lesotho': { 'coords': ['-29.609988', '28.233608'], 'gdp': '3.221' }, 'Libya': { 'coords': ['26.3351', '17.228331'], 'gdp': '12.734' }, 'Morocco': { 'coords': ['31.791702', '-7.09262'], 'gdp': '13.961' }, 'Madagascar': { 'coords': ['-18.766947', '46.869107'], 'gdp': '7.436' }, 'Mali': { 'coords': ['17.570692', '-3.996166'], 'gdp': '5.569' }, 'Mauritania': { 'coords': ['21.00789', '-10.940835'], 'gdp': '14.812' }, 'Mauritius': { 'coords': ['-20.348404', '57.552152'], 'gdp': '121.35' }, 'Malawi': { 'coords': ['-13.254308', '34.301525'], 'gdp': '17.833' }, 'Mozambique': { 'coords': ['-18.665695', '35.529562'], 'gdp': '9.724' }, 'Namibia': { 'coords': ['-22.95764', '18.49041'], 'gdp': '444.916' }, 'Niger': { 'coords': ['17.607789', '8.081666'], 'gdp': '11.162' }, 'Nigeria': { 'coords': ['9.081999', '8.675277'], 'gdp': '10.211' }, 'Réunion': { 'coords': ['-21.115141', '55.536384'], 'gdp': '25.32' }, 'Rwanda': { 'coords': ['-1.940278', '29.873888'], 'gdp': '1.654' }, 'Seychelles': { 'coords': ['-4.679574', '55.491977'], 'gdp': '3.151' }, 'Sudan': { 'coords': ['12.862807', '30.217636'], 'gdp': '36.204' }, 'Saint Helena': { 'coords': ['-24.143474', '-10.030696'], 'gdp': '3.998' }, 'Sierra Leone': { 'coords': ['8.460555', '-11.779889'], 'gdp': '31.468' }, 'Senegal': { 'coords': ['14.497401', '-14.452362'], 'gdp': '371.298' }, 'Somalia': { 'coords': ['5.152149', '46.199616'], 'gdp': '61.032' }, 'São Tomé and Príncipe': { 'coords': ['0.18636', '6.613081'], 'gdp': '7.903' }, 'Chad': { 'coords': ['15.454166', '18.732207'], 'gdp': '11.372' }, 'Togo': { 'coords': ['8.619543', '0.824782'], 'gdp': '24.615' }, 'Tunisia': { 'coords': ['33.886917', '9.537499'], 'gdp': '22.29' }, 'Tanzania': { 'coords': ['-6.369028', '34.888822'], 'gdp': '30.368' }, 'Uganda': { 'coords': ['1.373333', '32.290275'], 'gdp': '36.204' }, 'Mayotte': { 'coords': ['-12.8275', '45.166244'], 'gdp': '15.372' }, 'South Africa': { 'coords': ['-30.559482', '22.937506'], 'gdp': '1.741' }, 'Zambia': { 'coords': ['-13.133897', '27.849332'], 'gdp': '24.615' } }

const maxGDP = 444.916

Object.values(africaCoords).forEach(data => {
  const color = determineColor(data.gdp)
  L.circle(data.coords, {
    color: color,
    fillColor: color,
    fillOpacity: 0.2,
    radius: 9000 * (data.gdp)
  }).addTo(mymap);
})