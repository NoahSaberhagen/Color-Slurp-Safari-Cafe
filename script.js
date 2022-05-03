const div = document.querySelector(".box");

const newPlusBtn = document.createElement("button");
newPlusBtn.innerText = "+";
newPlusBtn.classList.add("plus");
div.appendChild(newPlusBtn);

const newMinusBtn = document.createElement("button");
newMinusBtn.innerText = "-";
newMinusBtn.classList.add("minus");
div.appendChild(newMinusBtn);

