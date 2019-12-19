class park{
  constructor(name,build,notree,area){
    this.name = name;
    this.build = build;
    this.notree = notree;
    this.area = area;
  }



  treedensity(){
    const density = this.notree/this.area;
    console.log(`The park ${this.name} has a density of ${density} trees per sq qm`)

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

park1 = new park('Park1',1990,700,1000)
park2 = new park('Park2',1996,1700,865)
park3 = new park('Park3',2000,1501,1800)

//const allParks [park1, park2, park3]

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

  const ages = arr.map(el => new Date().getFullYear() - el.build);
  console.log(`The constant age is this ${ages}`)

}




average(parko);


function name1000(arr){
 var yu = arr.map(el => {

  if (el.notree > 1000) {
    console.log(el.name)
  }

 })
  }

function alternatename1000(arr){
    const indexes = arr.map(el =>
                    el.notree).findIndex(el => el >= 1500);
    console.log("Indexes are " + indexes)
  }

alternatename1000(parko)
name1000(parko)



function len(streeto){

  let abb = 0
  streeto.forEach(x => abb += x.lengtho)
//  streeto.forEach(x => console.log(x.lengtho))
  console.log("total : " + abb )
  let avg = abb/streeto.length;
  console.log("average :" + abb/streeto.length)
//  console.log(streeto)

//  return abb,avg
}

len(streeto)



function alternativelen(streeto){

  let bbp = 0
  streeto.forEach(x => bbp += x.lengtho)
//  streeto.forEach(x => console.log(x.lengtho))
  console.log("total : " + bbp )
  let avg = bbp/streeto.length;
  console.log("average :" + bbp/streeto.length)
//  console.log(streeto)

  return [bbp,avg];
}

const [tot,alt]= alternativelen(streeto)
console.log('The alternative total len of street is ' + tot + 'and alternative total avg is ' + alt)


function classifystreet(streeto){

   console.log('The street ' + streeto.name is )

}

console.log(streeto)
