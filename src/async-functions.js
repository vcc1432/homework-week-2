
function giveItBackLater(value, callback) {
    const loadComplete = ()=> {
        console.log(value)
        callback()
    }
    setTimeout(loadComplete, 1000)
}

giveItBackLater("hi", setTimeout)




function addSomePromises(value) {
    return new Promise((resolve) => {
        giveItBackLater(value, resolve)
      })  
}

console.log(addSomePromises("hello")
  .then(value => getAuthorWrappedPromise(value)))


function promiseToGiveItBackLater(somePromise) {
    return new Promise((resolve, reject) => {
        console.log(somePromise)
        
        const error = false

        if(!error) {
            resolve(somePromise.concat('', somePromise))
        } else {
            reject(somePromise.concat('',somePromise,somePromise))
        }
    })
}

//console.log(promiseToGiveItBackLater("hello"))



module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
