let vacationSpots = ["Albania", "Caucus Mountains", "Mongolia"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


let vacationSpots = ["Albania", "Caucus Mountains", "Mongolia"];
for (let  vacationSpotIndex = 0;
     vacationSpotIndex < vacationSpots.length;
     vacationSpotIndex++) {
  console.log('I would love to visit '+ vacationSpots[vacationSpotIndex]);
}


let vacationSpots = ["Albania", "Caucus Mountains", "Mongolia"];
for (let  vacationSpotIndex = vacationSpots.length;
     vacationSpotIndex >= 0;
     vacationSpotIndex--) {
  console.log('I would love to visit '+ vacationSpots[vacationSpotIndex]);
}


let vacationSpots = ["Albania", "Caucus Mountains", "Mongolia"];
for (let  vacationSpotIndex = vacationSpots.length - 1;
     vacationSpotIndex >= 0;
     vacationSpotIndex--) {
  console.log('I would love to visit '+ vacationSpots[vacationSpotIndex]);
}


let myPlaces = ["Ulan Bataar", "Tirane", "Vladikavkaz"];
let friendPlaces =["Coyacan", "Ulan Bataar", "Rio de la Plata"];
for (let myPlacesIndex = 0;
     myPlacesIndex < myPlaces.length;
     myPlacesIndex++){  
  for (let friendPlacesIndex = 0;
       friendPlacesIndex < friendPlaces.length;
       friendPlacesIndex++){
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
    }
  }	
}


let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = '';
while (currentCard !== 'Spade'){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)]
}
console.log("found a spade")
