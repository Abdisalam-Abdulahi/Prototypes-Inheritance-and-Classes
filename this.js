/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.Window/Global Object Binding: When in the global scope, the value of “this” will be the window Object;
 * 2.Implicit Binding:at anyTime that a dot calls a function, the object before the dot is this.
 * 3.New binding:every time we use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function.
 * 4.Explicit binding:Whenever we use JavaScript’s apply method, this is explicitly defined.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function Greeting(greetingType) {
    console.log(this);
    return greetingType;
  }
  Greeting("As-salamu alaikum");
// Principle 2
// code example for Implicit Binding
const Obj = {
    faraxInfo: 'good man',
    tellFaraxInfo: function(name) {
      console.log(`${name}my name is ${this.faraxInfo}`);
      console.log(this);
    }
  };
  Obj.tellFaraxInfo('Farax');
// Principle 3
// code example for New Binding
function nameTeller(person) {
    this.speech = 'my name is '
    this.person = person;
    this.speak = function() {
      console.log(this.speech + this.person);
      console.log(this);
    };
  }
  
const abdi = new nameTeller('mohamed');
const farah = new nameTeller('caaisha');
  
abdi.speak();
farah.speak();
// Principle 4
// code example for Explicit Binding
abdi.speak.call('cumar'); farah.speak.apply('mukhtaar');