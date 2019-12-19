class park{
  constructor(name,build,notree,area){
    this.name = name;
    this.build = build;
    this.notree = notree;
    this.area = area;
  }



  treedensity(){
    console.log(this.notree/this.area);
  }

}

class street{
  constructor(name,build,lengtho,size='normal'){
    this.name = name;
    this.build = build;
    this.lengtho = lengtho;
    this.size=size;
  }
}

park1 = new park('Park1',1990,1500,1000)
park2 = new park('Park2',1996,1700,865)
park3 = new park('Park3',2000,600,1800)



let parko = [park1,park2,park3]

function density(parko){

  parko.forEach(x => x.treedensity())


}

 density(parko)

street1 = new street('Street1',1990,23,'tiny')
street2 = new street('Street2',1996,34)
street3 = new street('Street3',2000,45,'normal')
street4 = new street('Street4',2000,78,'huge')

let streeto = [street1,street2,street3,street4]
//console.log(park1)
//console.log(street1)




function average(arr){

  let counter = 0
  arr.forEach(x => counter += (2019-x.build) )
  const age = counter/arr.length
  console.log(age)

}

average(parko);


function name1000(arr){
 var yu = arr.map(el => {

  if (el.notree > 1000) {
    console.log(el.name)
  }

 })
  }


name1000(parko)



function len(streeto){

  let abb = 0
  streeto.forEach(x => abb += x.lengtho)
//  streeto.forEach(x => console.log(x.lengtho))
  console.log("total : " + abb )
  console.log("average :" + abb/streeto.length)
//  console.log(streeto)
}

len(streeto)

console.log(streeto)
