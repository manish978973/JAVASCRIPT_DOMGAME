//console.log("HELLO")


var Person = function(name,place,date){
  this.name=name;
  this.place=place;
  this.date=date;
  this.calulcateage = function() {
    console.log(2019 - this.date);
  }

//  this.calculatedeath = function(deathdate){
//    return(deathdate-this.date);
//  }
}


//adding death as protype of parent person


Person.prototype.calculatedeath = function(deathdate){
    return(deathdate-this.date);
  }

var a = 1
var John = new Person('John','Magdeburg',1992);

console.log(John.place);
console.log(John.date);
John.calulcateage();
console.log('the death is ' + John.calculatedeath(2023));

var Manu = new Person();

Manu.name = 'Manu'
Manu.place = 'Kolkata'
Manu.date = 1994

Manu.calulcateage();






/////////////////////////object.create tells the object which prototype it should belong // TODO:




var ab = {
  calculatenewage: function(){
    console.log(2019-this.year)
  }
};


var Manish = Object.create(ab);
Manish.name = 'Manish';
Manish.place = 'Kerala'
Manish.year = 1992;
Manish.calculatenewage();








/////////////////////primtives vs Object

var a = 30;
var b = a;

a = 40;

console.log(a)

var Sasi = {

  name : "Sasi",
  place : "Manacaud"
};

var obj2 = Sasi;
Sasi.place = "Thycaud";

console.log(obj2.place);




/////////////////////////Functions (which are also objects) instance of objects
//functions are stored in variabled and passes as arguments

var cars = ['Bosch','AMG','Diamler','Porsche'];

function mancar (arr,fn){

var b = Math.floor(Math.random() * 4);

fn(arr[b]);

}


function isgreat(a){
  console.log("Manish works in " + a);
}

mancar(cars,isgreat);


//////////////////////functions returning Functions



function checkcar(car){

 if (car === 'AMG'){

    return function(name){
      console.log(name + " is a fan of Lewis Hamilton");
    }

}

else if (car === 'FERRARI'){

  return function(name){
    console.log(name + " is a fan of Vettel");
  }
}

  else {
      return function(name){
      console.log(name + " is a fan of Red Bull");
    }

  }


}







var manishcar = checkcar('MCLAREN');
manishcar('Manish');

checkcar('AMG')('Rahul');





/////////////////////////Same abve example with Closures


function checkcar2(car){


  return function checkfin (name){

 if (car === 'AMG'){
          console.log(name + " is a fan of Lewis Hamilton");
    }



else if (car === 'FERRARI'){


    console.log(name + " is a fan of Vettel");

}

  else {

      console.log(name + " is a fan of Red Bull");


  }

}
}

checkcar2('AMG')('Manish');

//////////////////////////////
///////////Imediately invoked function (data privancy since variables are inly used inside and instantly)


(function mathscore (subject){
  score = Math.floor(Math.random() * 9);
  console.log((score > 5));

  console.log('Exam in ' + subject);

}) ('English') ;

//mathscore();


///////////////////////////////////////CALL


var Lucy = {
  name: 'Lucy',
  place: 'Italy',
  speech: function(timeofday){

    console.log("Good " + timeofday + " This is " + this.name + " Ladies and Gentleman");
}
}
Lucy.speech('Morning');
//console.log(Lucy.name)

var Lucifer = {
  name: 'Lucifer',
  place: 'Germany'

}

Lucy.speech.call(Lucifer,'Morning'); //the first paramter in call is dedictaed to this .

//Lucy.speech.apply(Lucifer,['Morning']); // not used now as applu uses array paramter

var temp = Lucy.speech.bind(Lucy);
temp('Goodnight');  // very useful bind saves the function which can be used later to input and roundscores
temp('Good Afternoon')


///////////////
//bind and array
var ages2 = [1992,1993,1994];

//var tv = [];

function nanni(arr, fn) {

    var tv1 = [];
    for (var i = 0; i < arr.length; i++){
      tv1.push(fn(arr[i]));
  }
  return tv1;

}



function agecal(val) {
  return 2019-val;
}

function retcheck(val,limit) {
  return val > limit;
}

var agefind4 = nanni(ages2,agecal);
var temp = nanni(agefind4, retcheck.bind(this,20))

console.log(temp)










///////////////////////////////Closures
