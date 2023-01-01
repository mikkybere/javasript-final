//let age = 31;
//age = 50;

//console.log('happy christmass');
//console.log(age);
//console.clear();
//let name;
//name = 'chika';
//console.log(name); 

/// data types in javascript
//String, number, Boolean, null, undefined, Symbol...;
/*
const name = 'jason';
const age = 12;
const isFair = true;
const y = null;
const x = undefined;
let session;

console.log(name);
console.log(typeof y);
 //n.b a null datataye when used with type of data function gives object
 // which is false because it bogous and is not true such this can be treated as null not an object
const info = `my name is ${name} i am ${age} old `;
console.log(info);

console.log(info.toUpperCase().substring(0,15));
 
//array
const cars = ['bmw', 'benz', 'ferarri', 'bentley'];
console.log(cars);

//const carsB = 'bmw, benz, ferarri, bentley'
//console.log(carsB.split(','));

cars.push('lambogini');
console.log(cars);

// creatng an object in javascript

const todos =[

    {
        id :1,
        text : 'have a meeting with the boss',
        isCompleted : true
    },
    
    {
        id:2,
        text :'Prepare a business model',
        isCompleted : true
    },
    
    {
        id :1,
        text : 'dentist appt.',
        isCompleted : false
    }
    
];*/

/*var dogAge = prompt("What is your dogs age?");
var humanAge = (dogAge-2)*3+18;
var ans = `If your dog's age is ${dogAge}, then your current age is ${humanAge}`;

document.getElementById("ans").innerHTML = ans;*/


function getMilk(bottles) {
    var name = "Galvin"
    console.log ("Move Up");
    console.log ("Move Up");
    console.log ("Turn Left");
    console.log(`Buy ${bottles} Bottles of Milk because  Each bottle costs 
    2 dollars therefore ${cash} dollars will buy ${bottles}. Thank you ${name}`)
    console.log ("Move Down");
    console.log ("Move Down");
    console.log ("Turn Right");
    
}
;
  var cash = prompt("How Much to you want to buy , so i get calculate the number of bottles you'll get");
 bottles = Math.floor(cash/2);
 getMilk(bottles);
//  document.getElementById("bottles").innerHTML = bottles;
 document.getElementById("bottles").innerHTML = bottles;
 