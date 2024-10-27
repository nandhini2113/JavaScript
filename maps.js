let map = new Map([['a', 1], ['b', 2], ['c', 3]])
console.log(map);

maps = new Map();
maps.set('a', 1);
maps.set('b', 2);
maps.set('c', 3);

console.log(maps);

console.log(maps.keys());
console.log(maps.values());
console.log(maps.entries());
console.log(maps.has('a'));

for(let [key,value] of maps){
    console.log(key + " " + value);    
}

for(let keys of maps){
    console.log(keys);   
}

for(let values of maps){
    console.log(values);   
}



console.log(maps.delete('c'));
console.log(maps);








