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

    clone() {
       return {...new ShoppingCart()}
       
    }
}

