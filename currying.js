function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let result = add(1)(2)(3);
console.log(result);

r1 = add(1);
r2 = r1(2);
r3 = r2(3);
console.log(r3);

