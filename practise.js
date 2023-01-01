// var name  = prompt('What is your name?');
// var firstCar = name.slice(0,1);
//  var firstCarUpper = firstCar.toUpperCase();
//  var restOfCar = name.slice(1,name.lenght);
//  var restOfCar2lower = restOfCar.toLowerCase();
//  var name = `${firstCarUpper}${restOfCar2lower}`;
// //  console.log(`Hello ${name}, nice to meet you`);

//  var dogAge = prompt( 'To determine your Current age, ansswer this . How old is your dog?');
//  var humanAge = (dogAge - 2) * 4 + 21;
//  console.log(`your dog is ${humanAge}  in human age` );


// function getMilk() {
//     console.log('go Right');
//     console.log('Turn left');
//     console.log('buy milk worth of ' + buyMilk);
//     console.log('Turn right');
//     console.log('go left');

//  }
// var robot =  'Mr Galvin';
// var bottles = prompt(`Hello ${robot} How many bottles of milk do you wanna buy ?`);
// var cost = `${bottles}`* 2;
// var buyMilk = '$'+cost;
// alert('You have bought '+ buyMilk + ' worth of milk. Thank you for your patronage ' + robot );
//  getMilk();
 
//*****************************
 //Trying  a function with an argument
//  function getCoke(bottles) {
//      console.log('go right');
//      console.log('turn left');
//      //var bottles = prompt('how many bottles do you want');
//      console.log('buy ' + bottles +' of coke');
//      var bottles  = 3.5 * bottles;
//      alert('your are about to purchase ' + bottles + ' bottles  of coke which will cost  $' + cost );
//  }
//  getCoke(6);

 //revers buy given money buy number of bottles

//  function getCoke(money) {
//     console.log('go right');
//     console.log('turn left');
//     var numberOfBottles = Maths.floor( money / 1.5);
//     var cost = 1.5 * numberOfBottles;
//     //var bottles = prompt('how many bottles do you want');
//     console.log('buy ' + numberOfBottles +' of coke');
//     alert('your are about to purchase ' + numberOfBottles + ' bottles  of coke which will cost  $' + cost );
// }
// getCoke(7);


// function that are alble to   give an output
 
 function getCoke(money) {
    console.log('go right');
    console.log('turn left');
    var numberOfBottles = ( money / 1.5);
    var cost = 1.5 * numberOfBottles;
    //var bottles = prompt('how many bottles do you want');
    console.log('buy ' + numberOfBottles +' of coke');
    alert('your are about to purchase ' + numberOfBottles + ' bottles  of coke which will cost  $' + cost );
    console.log( 'your are about to purchase ' + numberOfBottles + ' bottles  of coke which will cost  $' + cost+ ' and you change is ' + change )
   
    return money % 1.5;
}
var change = getCoke(7);

