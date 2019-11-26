let i = 25;

for (let i =0; i < 5; i++){
  //console.log(i);
}

//console.log(i)

//let defines block scope of variables which var doesnt

//since es6 variables are accessiblke only within any block it acts as iife

{
  let a = 0;
  const b =3;

}

//console.log(a+ b );           //this is similar to below IIFE in ES5

(function(){
  var a =0;
  const b =3;
})();

//console.log(a + b);


let  firstname = 'Manish';
let lastname = "RamaChandran";

function calcage (x){
  return 2019 - x;
}


//console.log(`Hey ${lastname}. Is ${firstname} your vor name ?. I guess your age is ${calcage(1992)} `);   //very nice


//const n = `${firstname} ${lastname}`
//console.log(n)
//console.log(n.startsWith('M'));
//console.log(n.endsWith('k'))
//console.log(n.includes('Man'))
//console.log(n.repeat(5))


let years = [1990,1991,1992,1993]

let ages = years.map(function(el){
  //console.log(2019-el);
});


let agese6 = years.map((el,index) => `${index+1} : ${2019 - el}`);
//console.log(agese6);


let agese6n = years.map((el,index) => {

    const year = new Date().getFullYear();
    let age = year - el;
    return `${index+1} and ${age}`


})


//console.log(agese6n);





//Arrow function

const ul = {
  color : "blue",
  position : 1,
  allow : function(){
    document.querySelector('.sasi').addEventListener('click', () => {

      var str = this.color + "with" + this.position;      //the idea is tat with arrow usage the "this" keyword is shared inside the callback function too ehich is typically a different function with different block usage
      alert(str);


    });
  }
}

ul.allow();





//giving name to array indexes as direct variables rather than umbers (Destructuring)

function calcret(yr){
  let age = new Date().getFullYear() -  yr;
  return [age,65-age];
}


let [age,ret] = calcret(1992);

//console.log(age);
//console.log(ret);


//

var echs = document.querySelectorAll('.box');

//Array.from(echs).forEach(x =>x.style.backgroundColor = '#008CBA');


var temp = Array.from(echs)  //.forEach(x => x.className==='box sasi1' ? continue : x.textContent = 'I changed my colour');

//for (var u =0; u < temp.length; u++){
//  if (temp[u].className==='box sasi1'){      //break and continue absent in forEach and Array.map
  //  continue;
  //}
  //temp[u].value = 'I changed my colour';

//}


//console.log(temp)

//map basically returnsarray of same size whereas foreach only iterates over interval

//replacement for above in ES6 ie for looping across array with break or conitnue


//for (const uip of temp ){
//  if (uip.className.includes('sasi1')){
//    continue;
//  }
//  uip.value = 'I changed my colour nn';
//}



//bikes = [23,14,13,25,10]

//console.log(bikes.findIndex(a => a > 15))
//console.log(bikes.find(a => a > 15))


var zuc = ['sasi' ,'arjun']
var cuz = ['manish','arjun']

//console.log(...zuc,...cuz)


function arrno(a,b,c,d){
  console.log(a + b + c + d);

}

//arrno(...zuc,...cuz)


//the baove was in ES6 in ES5 we use apply

//arrno.apply(null,zuc,cuz);     These are spread parameters

//rest parameters

function kushi(limit,...ye){
  ye.forEach(q => console.log((2019-q) > limit))
}

//kushi(26,1990,1991,1992,1993);




//default parameters in ES6

function pura(name,age,place = 'Trivandrum',job = 'Engineer'){
  this.name = name;
  this.age = age;
  this.place = place;
  this.job = job;
}


var p1 = new pura('Ramu',23)
//console.log(p1)

var p2 = new pura('Raku',17,'Newyork','Student')
//console.log(p2)





////////map is similar to objects withis inbuilt features


const question = new Map();

question.set('Question', 'What is the name of your first car ?')
question.set(1, 'Lambo')
question.set(2, 'Ambassador')
question.set(3, 'Padmini')
question.set('correct', 2)
question.set(true, 'Wow Correct answer')
question.set(false, 'Oops better luck next time')



//can be looped over map with foreach and for as used earlier

//console.log(question.get(1))
//console.log(question.has('Question'))
//console.log(question.size)
//console.log(question.delete(4))
//console.log(question.clear()))

//question.forEach((value,key) => console.log(`The key is ${key} and value is ${value}`)); // one method of looping (but we cant continue or break)


//console.log(question.get('Question'));
for (let [key,value] of question.entries()){

  if (typeof(key) === 'number'){
//  console.log(`Answer ${key} : ${value}`)
}
}

//var getto = prompt('Enter the answer number')

//console.log(question.get(parseInt(getto) === question.get('correct')))

//classes in javaacript can be writtel like javaacript

class car{

constructor (name, model, price){
  this.name = name;
  this.model = model;
  this.price = price;
}

 sasi (){   //methods can be directy werittem insted of using prototype
    console.log('Hi')
}


static lokesh(){ //static can be used with class name ..no need of creating instances
  console.log('Hi')
}


}

const car1 = new car('C class', 'Mercedes', 135)
//car1.sasi()
//car.lokesh()



class smallcar extends car{

constructor (name, model, price,country, language){

  super(name,model,price)
  this.country = country;
  this.language = language;

}


poco (){
  console.log(this.name + ' in ' + this.country)
}

}


const car2 = new smallcar('C class', 'Mercedes', 135,'India','Malayalam')
car2.poco();
car2.sasi();
