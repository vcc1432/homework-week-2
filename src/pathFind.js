
function pathFind(path, object) {
    console.log(path, object)
    
}


pathFind(["foo"], { foo: "bar" }) // === "bar"


    // pathFind(["name"], { name: "Dave" }) // === "Dave"
    // pathFind(["author", "name"], { year: 1988, author: { name: "Stephen" } }) // === "Stephen"
    // pathFind(["book", "author", "name"], {
    //   book: {
    //     author: {
    //       name: "Yuval"
    //     },
    //     year: 2015
    //   },
    //   category: "Science"
    // }) // === "Yuval"

module.exports = { pathFind }