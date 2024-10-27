const p = {
    name :"prabhas",
    age:45
}

const p1 = p;
p1.name="Mahesh";
console.log(p1);
console.log(p);

let person = {
    name : "Vijay",
    age: 32
}

let person1 = JSON.parse(JSON.stringify(person));
person1.name="Nani";
console.log(person1)
console.log(person);
;



