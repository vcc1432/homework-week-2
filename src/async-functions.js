
function giveItBackLater(value, callback) {
    function loadComplete() {
       callback(() => {console.log(value)})
    }
    setTimeout(loadComplete, 1000)
}

function addSomePromises(value) {
    return new Promise(resolve => {
        giveItBackLater(value, resolve)
      })  
}

function promiseToGiveItBackLater(somePromise) {
    return new Promise((resolve, reject) => {
            if (somePromise) {
                console.log(somePromise.concat('',somePromise))
                resolve(somePromise); 
            } else {
                reject(console.log(somePromise.concat('',somePromise, somePromise))); 
            }
        }
    );
}



// 1. Calling `addSomePromises(somePromise)` should chain some promises and return a new one. Your code should add both a fulfillment handler and a rejection handler.

//      - When `somePromise` resolves with a string `"foo"`, the returned promise should resolve with a string `"foofoo"`.
//      - When `somePromise` is rejected with the value `"bar"`, the returned promise should resolve with `"barbarbar"`.

//    So, your fulfillment handler should double the string and the rejection handler should triple the string.


module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
