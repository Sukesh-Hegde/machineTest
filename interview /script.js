// let obj1 = {
//   username : "sukesh"
// }

// let obj2 = {
//   username: "sukesh",
// };

// let obj3 = obj1

// console.log(obj3 == obj1);


// let sum =(e)=>{
//   return e + 1;
// }

// const result = sum(5);
// console.log(result);


var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}