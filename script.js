const div = document.querySelector(".box");
const newBtn = () => {
  const addToCart = document.createElement("button");
  addToCart.innerText = "Add To Cart";
  addToCart.classList.add("updateCart");
  div.appendChild(addToCart);
};

const plusBtn = () => {
const newPlusBtn = document.createElement("button");
newPlusBtn.innerText = "+";
newPlusBtn.classList.add("plus");
div.appendChild(newPlusBtn);
};

const minusBtn = () => {
const newMinusBtn = document.createElement("button");
newMinusBtn.innerText = "-";
newMinusBtn.classList.add("minus");
div.appendChild(newMinusBtn);
};

plusBtn();
newBtn();
minusBtn(); 

/* const shopBtns = document.querySelectorAll(".box")
for(let i = 0; i < shopBtns.length; i++) {
  plusBtn();
  newBtn();
  minusBtn();
}   I FELL LIKE IM SO CLOSE */

/*const productBox = document.querySelectorAll(".box");

for (let i = 0; i < productBox.length; i++) {
  const productBoxs = document.querySelector(".box");
  const newPlusBtn = document.createElement("button");
  newPlusBtn.innerText = "+";
  newPlusBtn.classList.add("plus");
  productBoxs.appendChild(newPlusBtn);
}
console.log(productBox)*/


