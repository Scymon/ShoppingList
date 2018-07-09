var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Get length of input to see if it's empty
function inputLength() {
	return input.value.length;
}

function liLength() {
	return li.length;
}

function addDelete(addTo) {
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	addTo.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;
}

for (i = 0; i < liLength(); i++) {
	addDelete(li[i]);
}

function createListElement() {
	var newLi = document.createElement("li");
	var inputValue = document.createTextNode(input.value);
	newLi.appendChild(inputValue);
	ul.appendChild(newLi);
	input.value = "";

	addDelete(newLi);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function mousePointer(event) {
	event.target.style.cursor = "pointer";
}

function checkedItem(event) {
		event.target.classList.toggle("done")
}

function removeParent(evt) {
	evt.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Pointer Cursor to show Click
ul.addEventListener("mouseenter", mousePointer);

// Toggle Strike Through to check off item
ul.addEventListener("click", checkedItem);
