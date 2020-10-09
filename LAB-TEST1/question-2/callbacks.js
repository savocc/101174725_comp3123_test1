function resolvedPromise () {
    return new Promise (function (resolve){
        setTimeout(() => resolve (console.log('message: delayed success!')), 500);
    })
}

function rejectedPromise () {
    return new Promise (function (reject){
        setTimeout(() => reject(console.log('error: delayed exception!')), 500);
    })
}
resolvedPromise()
    .then(res=>console.log(res))

rejectedPromise()
    .then(res=>console.log(res))