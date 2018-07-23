class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  get name () {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior(){
    this._behavior ++;
  }
}
const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);


class Surgeon{
  constructor(name, department){
    this._name = name;
    this._department = department;
  }
}


const surgeonCurry = new Surgeon('Curry',
                                 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant',
                                  'Orthopedics');


class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}


console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);


class HospitalEmployee{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }
}


class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk',
                              ['Trauma', 'Pediatrics'])


nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);



class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications(){
    return this._certifications;
  }
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


static generatePassword(){
    return Math.floor(Math.random()*10000)
}
