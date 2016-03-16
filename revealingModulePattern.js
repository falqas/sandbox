var theModule = (function() {

  var counter = 0;
  var flag = false;

  return {
      increment: function() {return ++counter;},
      decrement: function() {return --counter;},
      toggle: function() {return (flag = !flag);}
  };

})();