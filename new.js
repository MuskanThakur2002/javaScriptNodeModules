var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);


var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(myFun())
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
console.log (addSum(3))

var lowercaseLetter="a"

switch(lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }
var val=3
var result = "";
switch(val) {
case 1:
case 2:
case 3:
    console.log( "1, 2, or 3")
    break;
case 4:
    console.log("4 alone")
}

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
console.log(myFun())
var someObj = {
    propName: "John"
  };
function propPrefix(str) {
var s = "prop";
return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
console.log(someObj)

var myObj = {
    top: "hat",
    bottom: "pants"
  };
console.log(myObj.hasOwnProperty("top"))
console.log(myObj.hasOwnProperty("bottom"))
  

console.log(myObj)


var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
console.log(ourStorage.cabinet["top drawer"].folder2)
console.log(ourStorage.desk.drawer)
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));


function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue){
      return "Yes, that  was true"
    }return "No, that was false"
    // Only change code above this line
  }
console.log(trueOrFalse(false))

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));
const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;
const {age,name}=user
console.log(name)
console.log(age)

const user = { name: 'John Doe', age: 34 };

const { name: userName, age: userAge } = user;
console.log(userName)
// console.log(userAge)
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

const { johnDoe: { age, email }} = user;
console.log(age,email)  
const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(userAge,userEmail)
// console.log(age,email)  

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }return "Not found"
    // Only change code above this line
  }
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift2"))
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  // Only change code below this line
  
  
const half = (stats) =>{
    const{max,min}=stats
    return  (max + min)/2.0
  }
console.log(half(stats))
function printManyTimes(str) {

    // Only change code below this line
  
const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      var name=sentence;
    }
  console.loh(name)
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
console.log(zeus)


class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
}
const zeus = new SpaceShuttle('Jupiter');

// console.log(zeus)

class Book {
    constructor(author) {
      this._author = author;
    }
    getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
const novel = new Book('anonymous');
console.log(novel)
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer); 


// // Only change code below this line
class Thermostat{
    constructor(Fahrenheit){
      this._Fahrenheit=Fahrenheit
    }
    get temperature(){
      return this._Fahrenheit;
    }
    set temperature(thermos){
      this._Fahrenheit=thermos
    }
}
// // Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos)
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
console.log(temp)
temp = thermos.temperature; // 26 in Celsius
console.log(temp)
var myArray = [];
var i=5
while(i>=0){
  myArray.push(i)
  console.log(myArray)
  i-=1
}
console.log(myArray)