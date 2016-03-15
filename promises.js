// promises

var diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
};

var p1 = new Promise(function(fulfill, reject) {
  var thisRoll = diceRoll();
  if (thisRoll === 6) {
    fulfill(thisRoll);
  }  else {
    reject(thisRoll);
  }
});


p1
  .then(function(){
    console.log('Yay, rolled a', thisRoll);
  })
  .catch(function(){
    console.log('Boo, rolled a', thisRoll);
  })
