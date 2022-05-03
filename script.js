const newBtn = () => {
    const  div = document.querySelector(".box");
    const addToCart = document.createElement("button");
    addToCart.innerText = "Add To Cart";
    addToCart.classList.add("updateCart");
    div.appendChild(addToCart);
   }

   const div = document.querySelector(".box");
   
const newPlusBtn = document.createElement("button");
newPlusBtn.innerText = "+";
newPlusBtn.classList.add("plus");
div.appendChild(newPlusBtn);

newBtn() 

const newMinusBtn = document.createElement("button");
newMinusBtn.innerText = "-";
newMinusBtn.classList.add("minus");
div.appendChild(newMinusBtn);

/*const productBox = document.querySelectorAll(".box");

for (let i = 0; i < productBox.length; i++) {
  const productBoxs = document.querySelector(".box");
  const newPlusBtn = document.createElement("button");
  newPlusBtn.innerText = "+";
  newPlusBtn.classList.add("plus");
  productBoxs.appendChild(newPlusBtn);
}
console.log(productBox) */






