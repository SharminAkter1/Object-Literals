const person ={
 firstName: 'Sharmin',
 lastName: 'Akter',
 age: 18,
 email: 'sharmin@gmail.com',
 hobbies: ['music', 'sports'],
 address: {
   city: 'Dhaka',
   State: 'Bogura'
 },
 getBirthYear: function(){
   return 2021 - this.age;
 }

}

let val;
//Get Specific value
val = person.firstName;
val = person['firstName'];
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.State;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
{name: 'sharmin', age:18},
{name: 'jerin', age: 20},
{name: 'jara', age: 30}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}