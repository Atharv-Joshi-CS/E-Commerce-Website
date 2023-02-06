import { Cart } from "./cart.js";

class Product{

    constructor(product){
        this.imagePath = product.imagePath;
        this.title = product.title;
        this.category = product.category;
        this.price = product.price;
        this.count = 0;
        this.uniqueId = (Math.random() + 10).toString(36).substring(7);
        this.mounted = false;
    }

    increment(){
        Cart.incrementCartItems(this.price);
        this.count += 1;
        this.updateCount();
    }

    decrement(){
        if(this.count > 0){
            Cart.decrementCartItems(this.price);
            this.count -= 1;
            this.updateCount();
        }
    }

    updateCount(){
        document.getElementById(this.uniqueId).innerText = this.count;
    }

    render(){

        //creating elements
        const card = document.createElement("div");
        const cardCartCount = document.createElement("div");
        const cardCartCountValue = document.createElement("p");
        const productImage = document.createElement("img");
        const details = document.createElement("section");
        const minDetails = document.createElement("div");
        const productTitle = document.createElement("h1");
        const productCategory = document.createElement("span");
        const productPrice = document.createElement("h1");
        const cardBtnContainer = document.createElement("div");
        const addBtn = document.createElement("button");
        const removeBtn = document.createElement("button");

        //assigning classes
        card.classList.add("card");
        cardCartCount.classList.add("card-cart-count");
        cardCartCountValue.classList.add("card-cart-count-value");
        productImage.classList.add("product-image");
        details.classList.add("details");
        minDetails.classList.add("min-details");
        productTitle.classList.add("product-title");
        productCategory.classList.add("product-category");
        productPrice.classList.add("product-price");
        cardBtnContainer.classList.add("card-btn-container");
        addBtn.classList.add("add-btn", "card-btn");
        removeBtn.classList.add("remove-btn", "card-btn");

        //assigning properties
        cardCartCountValue.innerText = this.count;
        productImage.src = `https://raw.githubusercontent.com/Atharv-Joshi-CS/DataSets/main/E-Commerce-Website/Images/${this.imagePath}`;
        productTitle.innerText = this.title;
        productCategory.innerText = this.category;
        productPrice.innerText = `\$${this.price}`;
        addBtn.innerText = "Add";
        removeBtn.innerText = "Remove";
        cardCartCountValue.id = this.uniqueId;

        //eventListners
        addBtn.onclick = this.increment.bind(this);
        removeBtn.onclick = this.decrement.bind(this);
        


        //assembling the component
        card.appendChild(cardCartCount);
        card.appendChild(productImage);
        card.appendChild(details);

        cardCartCount.appendChild(cardCartCountValue);

        details.appendChild(minDetails);
        details.appendChild(cardBtnContainer);

        minDetails.appendChild(productTitle);
        minDetails.appendChild(productPrice);

        productTitle.appendChild(productCategory);
        
        cardBtnContainer.appendChild(addBtn);
        cardBtnContainer.appendChild(removeBtn);

        return card;
    }

    mount(element){
        if(this.mounted === false){
            element.appendChild(this.render());
            this.mounted = true;
        }
    }
}

export {Product};