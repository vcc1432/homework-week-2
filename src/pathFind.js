
function pathFind(path, object) {
        return path.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, object);
    }

    



console.log(pathFind(["foo"], { foo: "bar" })) // === "bar"
// pathFind(["name"], { name: "Dave" }) // === "Dave"
// pathFind(["author", "name"], { year: 1988, author: { name: "Stephen" } }) // === "Stephen"
// //console.log(pathFind(["book", "author", "name"], {
//       book: {
//         author: {
//           name: "Yuval"
//         },
//         year: 2015
//       },
//       category: "Science"
//     })) // === "Yuval"


module.exports = { pathFind }
