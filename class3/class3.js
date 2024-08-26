//optional chaining operator =>  ?.

//null coalescing operator => ??

let hasError = true;
const promise = new Promise((resolve, reject) => {
    if (hasError) {
        reject("Server error!")
    } else {
        resolve("Connected Succesfully!")
    }
});

promise.then((result) => {
    console.log(result);
})
.catch((e) => {
    console.log(e);
}).finally(() => {
    console.log("Request settled!")
})


async function main(){
    try{
        const result = await promise
        console.log(result);
    } catch(e) {
        console.log(e);
    } finally {
        console.log("finally completes!");
    }
}

main();


setTimeout(() => {
    console.log("Time is up!");
}, 2000);

//Yo lai pani promisify garna milcha

function waitFor(sec) {
    return new Promise((resolve) => {
        setTimeout(resolve, sec)
    })
}

async function sleepChecker(){
    console.log("before sleep");
    await waitFor(3000);
    console.log("after sleep, DONE!")
}

sleepChecker();
