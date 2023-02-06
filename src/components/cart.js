class Cart{

    static totalItems = 0;
    static totalPrice = 0;

    constructor(){
        this.totalItems = 0;
        this.totalPrice = 0;
        this.mounted = false;
    }

    static incrementCartItems = (price) => {
        this.totalItems += 1;
        this.totalPrice += parseInt(price);
        this.updateState();
    }

    
    static decrementCartItems = (price) => {
        if(this.totalItems > 0){
            this.totalItems -= 1;
            this.totalPrice -= price;
            this.updateState();
        }
    }

    static updateState = () => {
        document.getElementById("cart-items-value").innerText = this.totalItems;
        document.getElementById("cart-total-value").innerText = `\$ ${this.totalPrice}`;
    }

    render(){

        //creating elements
        const cart = document.createElement("div");
        const cartTitle = document.createElement("h2");
        const cartItemContainer = document.createElement("div");
        const cartItems = document.createElement("h4");
        const cartItemsValue = document.createElement("p");
        const cartTotalContainer = document.createElement("div");
        const cartTotal = document.createElement("h4");
        const cartTotalValue = document.createElement("p");

        //assigning classes
        cart.classList.add("cart");
        cartTitle.classList.add("cart-title");
        cartItemContainer.classList.add("cart-item-container");
        cartTotalContainer.classList.add("cart-total-container");

        //assigning properties
        cartTitle.innerText = "Cart";
        cartItems.innerText = "Cart Items : ";
        cartTotal.innerText = "Total : ";
        cartItemsValue.innerText = this.totalItems;
        cartTotalValue.innerText = `\$ ${this.totalPrice}`;
        cartItemsValue.id = "cart-items-value";
        cartTotalValue.id = "cart-total-value";

        //assembling the component
        cart.appendChild(cartTitle);
        cart.appendChild(cartItemContainer);
        cart.appendChild(cartTotalContainer);

        cartItemContainer.appendChild(cartItems);
        cartItemContainer.appendChild(cartItemsValue);

        cartTotalContainer.appendChild(cartTotal);
        cartTotalContainer.appendChild(cartTotalValue);

        return cart;
    }

    mount(element){
        if(this.mounted === false){
            element.appendChild(this.render());
            this.mounted = true;
        }
    }

}

export {Cart};