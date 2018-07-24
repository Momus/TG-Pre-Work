let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;


const Airplane = require('./1-airplane.js');
function displayAirplane() {
  console.log(Airplane.myAirplane);
}
displayAirplane()


let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
  return this.myAirplane;
}
};

const Airplane = require ('./2-airplane.js');
console.log(Airplane.displayAirplane());


let Airplane = {
  availableAirplanes: [{name: 'AeroJet', fuelCapacity: 800},
                       {name: 'SkyJet', fuelCapacity: 500}]
};
export default Airplane;




function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
displayFuelCapacity();


let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance','sensorOperators']
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff,requiredStaff){
  if(availableStaff.length >= requiredStaff) 
     {return true;} 
     else {return false;}
}
export {availableAirplanes, flightRequirements, meetsStaffRequirements};



function displayStaffStatus() {
  availableAirplanes.forEach(function(element)
                             {console.log(element.name
                                          + ' meets staff requirements: '
                                          + meetsStaffRequirements(element.availableStaff,
                                                                   flightRequirements.requiredStaff)
                                         )}
                            );
}

displayStaffStatus();


export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {return true;
                                  } else {
                                    return false;
                                  }
};


function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus()



export {availableAirplanes as aircrafts,
        flightRequirements as flightReqs,
        meetsStaffRequirements as meetsStaffReqs,
        meetsSpeedRangeRequirements as meetsSpeedRangeReqs};


import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';


export default meetsSpeedRangeRequirements;


import { availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';
