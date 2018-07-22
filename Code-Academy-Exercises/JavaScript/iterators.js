let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach((fruit)  => {
  console.log(`I want to eat a ${fruit}`)
});


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich',
               'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
let secretMessage = animals.map((beast)  => {
  return beast.charAt(0);
});
console.log(secretMessage.join(''));
let bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
let smallNumbers = bigNumbers.map((num) => {
  return num / 100;
});


let randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});
// Refactor the code above using arrow function syntax
let longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7
});


et words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below
console.log(words.some(function(word) {
  return word.length < 6;
}));
// Use filter to create a new array
let interestingWords = words.filter((word) => {
  return word.length > 5;
});
console.log(interestingWords.every(word =>  word.length > 5));


let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin',
              'Boulder'];
let nums = [1, 50, 75, 200, 350, 525, 1000];
// Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);
// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);
// Choose a method that will return a boolean value
nums.every(num => num < 0);
