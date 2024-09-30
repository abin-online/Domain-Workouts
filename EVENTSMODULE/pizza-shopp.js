class PizzaShop{
    constructor(){
        this.orderNumber = 0 
    }

    order(){
        this.orderNumber++
    }

    displayOrderNumber(){
        return this.orderNumber
    }
}