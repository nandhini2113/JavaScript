for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// for(var i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);        
//     },1000)
// }


let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]

new_arr = [...new Set(arr)];
console.log(new_arr);

count = 1;
const int = setInterval(() => {
    console.log(count);
    if (count == 5)
        clearInterval(int);
    count++;
}, 1000)
