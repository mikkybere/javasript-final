// function lifeLine(Age) {
//  var rmainingLife = 110 - Age;
//  var daysRemaining = rmainingLife * 365 ;
//  var weeksRemaining = rmainingLife * 52 ;
//  var monthsRemaining = rmainingLife * 12 ;
//  console.log( 'You have '  + daysRemaining + ' number of days, '  + weeksRemaining+ ' number of weeks amd ' + monthsRemaining + 'number of months' )

// }
// lifeLine(30);

function getFanta(money) {
    console.log('Go Right');
    console.log('Go left');
    var quantityToBuy = money/1.3 ;
    console.log('Go Right');
    console.log('Go Right');
    var ans = ('your are buying'+ quantityToBuy + ' of Fanta since you have ' + money);
    return money % 1.3 ;
    document.getElementById('ans').innerHTML = ans;
}
getFanta(8);
console.log(quantityToBuy);
