const takeOrder = () => {
  console.log('Order: pizza');
}
takeOrder();


const takeOrder = (topping) => {
  console.log(`Order: pizza topped with ${topping}`);
};
takeOrder("olives");


const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
};
takeOrder('mushrooms', 'thin crust');
takeOrder('olives', 'Chicago casserole');
takeOrder('bacon', 'real (NY) pizza');


let orderCount = 0;
const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
} 
const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}
console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount));


function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {return true;} else {return false;}}
console.log(isGreaterThan(1, 2));


const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
};
isGreaterThan(4, 8)


const volumeOfSphere = diameter => (1/6) * Math.PI * diameter *
      diameter * diameter;
console.log('The volume of a sphere is ' +
            volumeOfSphere(10) + ' cubic centimeters');
