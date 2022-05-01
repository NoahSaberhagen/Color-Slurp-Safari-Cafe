// begin shopping cart ----------------------------------------------------------------------

const mainBodyItem = document.querySelectorAll(".main-body__item");

const nav = document.querySelector("nav");
const cart = document.createElement("ul");
cart.textContent = "your cart:"
cart.style.listStyle = "none";

nav.appendChild(cart);

mainBodyItem.forEach((item) => {
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "add to cart"
    addToCartButton.addEventListener('click', () => {
        const itemAdded = document.createElement('li');
        itemAdded.textContent = item.textContent;
        cart.appendChild(itemAdded)
    });
    item.appendChild(addToCartButton);
});



// end shopping cart -------------------------------------------------------------------------