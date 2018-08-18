module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
       return this.items
    }
    
   addItem(itemName, quantity, price) { 
       const newItem = {     
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
       }
       console.log(newItem)
       this.items.push(newItem)
    } 
    
    //adds new item to internal array
    //item should be an object with 3 properties: name, quantity, pricePerUnit 
    //this object should be pushed into getItems array.
    clear() {
    }
}


// const cart = new ShoppingCart()
// //console.log(cart.getItems())
// cart.addItem("Trash can", 1, 15.5)

