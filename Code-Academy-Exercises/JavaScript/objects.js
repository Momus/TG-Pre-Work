let person = {
  name: 'Dmitri',
  age: 45
};


let person = {
  name: 'Dmitri',
  age: 40
};
console.log(person.name);
console.log(person.age);


console.log(person['name']);
console.log(person['age']);


let person = {
  name: 'Dmitri',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};
let day = 'Sunday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm' 
} else {
  alarm = 'weekAlarm'    
}
console.log(person[alarm]);


person.hobbies = ['flying', 'running']
console.log(person.hobbies)


let person = {
  name: 'Dmitri',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {return 'Hello, there!'}
};
console.log(person.sayHello())


let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return 'Hello, there!';
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
  
};


let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
  
};
console.log(person.sayHello());


let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
};
let friend = {
  name: 'Emily'
}
friend.sayHello = person.sayHello;
console.log(friend.sayHello());


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge){
    if (typeof newAge === 'number' ) {
      this._age = newAge;
    } else {
      return 'Invalid input' }}};


person.age = 'Thirty-nine'
person.age = 39


let person = {
  _name: 'Lu Xun',
  _age: 137,
  set age(newAge){
    if (typeof newAge === 'number' ) {
      this._age = newAge;
    } else {
      return 'Invalid input'
    }
  },
  get age(){
    return `${this._name} is ${this._age} years old.`
  }
};
console.log(person.age);
