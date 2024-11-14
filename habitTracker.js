const input 		= 	document.getElementById('input');
const add_button	= 	document.getElementById('add');
const mainList 		= 	document.getElementById("mainList");



add_button.addEventListener("click", () => {
	if(input.value.length <= 4)
	{
		console.log("please enter at least 4 charecters");
	}
	else{

		let tempLI = document.createElement("li");
		let tempInput = document.createElement("input")
		let tempLebal = document.createElement("label");
		let tempDiv = document.createElement("div");
		let tempButton = document.createElement("button")
		let tempImg = document.createElement("img")

		tempInput.setAttribute("type","checkbox");
		tempLebal.innerText = `${input.value}`;

		tempImg.setAttribute("src","icons/close.png");
		tempImg.setAttribute("alt","close");

		tempButton.appendChild(tempImg);
		tempLI.appendChild(tempInput);
		tempLI.appendChild(tempLebal);
		tempDiv.appendChild(tempLI);
		tempDiv.appendChild(tempButton);
		mainList.appendChild(tempDiv);
	}
})