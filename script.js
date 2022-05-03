const div = document.querySelector(".box");

const newPlusBtn = document.createElement("button");
newPlusBtn.innerText = "+";
newPlusBtn.classList.add("plus");
div.appendChild(newPlusBtn);

const newMinusBtn = document.createElement("button");
newMinusBtn.innerText = "-";
newMinusBtn.classList.add("minus");
div.appendChild(newMinusBtn);

const newBtn = () => {
 const  div = document.querySelector(".box");
 const addToCart = document.createElement("button");
 addToCart.innerText = "Add To Cart";
 addToCart.classList.add("updateCart");
 div.appendChild(addToCart);
}
 newBtn() 



