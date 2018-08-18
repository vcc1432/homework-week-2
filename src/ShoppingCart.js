module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
       return this.items // when called, returns the array
    }
    
   addItem(itemName, quantity, price) { //adds new item to internal array
       const newItem = {     
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
       }
       this.items.push(newItem) //this object is pushed into empty array.
    } 
    
    clear() {
        this.items = []
    }
}


// const cart = new ShoppingCart()
// cart.addItem("Trash can", 1, 15.5)
// cart.addItem("Duvet cover", 1, 25)
// console.log('this is the existing array: ', cart.getItems())
// cart.clear()
// console.log('this is the existing array: ', cart.getItems())
// cart.addItem("Pyamas", 2, 7)
// console.log('this is the existing array: ', cart.getItems())

