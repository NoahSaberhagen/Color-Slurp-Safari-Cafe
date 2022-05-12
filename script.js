const div = document.querySelector(".box");
const cartBtn = () => {
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

const productBox = document.querySelectorAll(".box");

for (let i = 0; i < productBox.length; i++) {
  const productBoxs = document.querySelector(".box");
  const newPlusBtn = document.createElement("button");
  newPlusBtn.innerText = "+";
  newPlusBtn.classList.add("plus");
  productBox[i].appendChild(newPlusBtn);
  const newCartBtn = document.createElement("button");
  newCartBtn.innerText = "Add To Cart";
  newCartBtn.classList.add("updateCart");
  productBox[i].appendChild(newCartBtn);
  const newMinusBtn = document.createElement("button");
  newMinusBtn.innerText = "-";
  newMinusBtn.classList.add("minus");
  productBox[i].appendChild(newMinusBtn);
}
