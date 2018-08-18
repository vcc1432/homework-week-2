
function pathFind(path, object) {
        return path.reduce((obj, key) => obj[key], object)
}

//Iterates over path array. Takes the first element, book, and uses it as a property name in the object, which is set as the inititalValue. This returns the value of 'book', which is {author: { name: "Yuval" }. In the second iteration, the current value is 'author', which is then used as a key to acces the value {name: "Yuval"}. The last iteration will be {name: 'Yuval}['name'], which equals 'Yuval'.
    


module.exports = { pathFind }
