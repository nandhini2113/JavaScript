let promise = new Promise((resolve, reject) => {
    let age = 18
    if (age > 18) {
        resolve("eligible for vote");
    }
    else {
        reject("not eligible");
    }
})

promise
    .then(x => console.log(x))

    .catch((error) => {
        console.error(error)
    });