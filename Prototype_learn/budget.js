//creating different modules

var budgetcontroller = (function(){
  var x = 23;
  var add = function(a){
    return x+a;
  }

  return {
    publicTest: function(b){
      return add(b);
    }
  }

} )();

var UIcontroller = (function(){


})();



var controller = (function(budgtctrl,uictrl){

var z = budgtctrl.publishTest;

return {

  another : function(){
    console.log(z);
  }
}


})(budgetcontroller,UIcontroller);
