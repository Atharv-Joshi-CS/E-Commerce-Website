import { Product } from "./components/product.js";
import { Cart } from "./components/cart.js";
import { NavBar } from "./components/navbar.js";

import { getData } from "./utilites/api_calls.js";
import { ProductModel } from "./models/product_model.js";

const root = document.getElementById("root");

const navBar = new NavBar();
navBar.mount(root);

//retrieving data from api
getData()
.then(
    (data) => {
        const products = data.map(
            (element) => new ProductModel(element)
        );

        const productsSection = document.createElement("div");
        productsSection.classList.add("products-section");
        root.appendChild(productsSection);

        products.forEach(element => {
            const productCard = new Product(element);
            productCard.mount(productsSection);
        });

        const cartSection = document.createElement("div")
        cartSection.classList.add("cart-section")
        root.append(cartSection)

        const cart = new Cart();
        cart.mount(cartSection);
    }
)