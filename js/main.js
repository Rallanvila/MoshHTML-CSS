//MOSH
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
	item.addEventListener("click", function () {
		this.classList.toggle("collapsible--expanded");
	}),
);

// MY CODE THAT WORKED
//==============================
// const icon = document.getElementsByClassName("icon")[0];
// const collapsible = document.getElementsByClassName("collapsible")[0];
// console.log("Icon:", icon);
// console.log("collapsible:", collapsible);

// icon.addEventListener("click", () => {
// 	// return console.log("click-event:", collapsible);
// 	collapsible.classList.toggle("collapsible--expanded");
// 	// console.log("toggle clicked");
// });
