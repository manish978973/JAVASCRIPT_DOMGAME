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

console.log(...zuc,...cuz)


function arrno(a,b,c,d){
  console.log(a + b + c + d);

}

//arrno(...zuc,...cuz)


//the baove was in ES6 in ES5 we use apply

arrno.apply(null,zuc,cuz);
