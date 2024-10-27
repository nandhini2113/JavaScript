const set = new Set();

set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log(set);

console.log(set.has(3));

console.log(set.delete(5));
console.log(set);

set.clear();
console.log(set);




