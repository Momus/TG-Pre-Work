// Set the variable below to a number
let esFivePercentageSupport = 96.85;

// Set the variable below to a number
let esSixTemplateLiterals = 88.72;


var pasta = "Spaghetti"; // ES5 syntax
var meat = "Pancetta"; // ES6 syntax
var sauce = "Eggs and cheese"; // ES6 syntax
// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with "
    + pasta
    + " "
    + meat
    + " and a sauce made with "
    + sauce
    + ".";


`npm install babel-cli`
`npm install babel-preset-env`
`npm run build`


`npm init` // creates package.json

`npm install babel-cli -D`
`npm install babel-preset-env -D`


`touch .babelrc`
`echo '{ "presets": ["env"] }' >> .babelrc`


{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "Dmitri",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}


`npm run build`
