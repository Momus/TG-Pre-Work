const satellite = 'The Moon'
const galaxy = 'The Milky Way'
let stars = 'North Star'

const myNightSky = () => {
  return `Night Sky: ${satellite}, ${stars}, ${galaxy}`; 
}
console.log(myNightSky())


const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
}
visibleLightWaves()
console.log(lightWaves)


const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
    true;} else {false};
  console.log(lightWaves);
}
visibleLightWaves()


const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i=0; i < 12; i++){
    console.log(i);
  }
}
starCount()
console.log(i)
