//for condition example
for(i=0;i<=10;i++){
    console.log(i)
}

//for in condition example
const cars = ["BMW","volvo","Swift","Toyoto"];
for(let x in cars){
  console.log(cars[x]);
}

//for of condition example
let name = "Deepavishali";
for(let x of name){
 console.log(x);
}

//for each condition example

const animals = ["Elephant","Tiger","Rabbit","Cow","Donkey","Monkey"]

animals.forEach((element)=> console.log(element))

//Another example in foreach

let array = [4,6,1,8,0]
array.forEach((number)=>console.log(number*2))