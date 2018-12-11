//jshint esversion:6
var buttonToggler = document.querySelector(".navbar-toggler");
buttonToggler.onclick = function() {
	var nav = document.querySelector(".navbar-list-link");
	if (nav.className === "navbar-list-link") {
		nav.className += " responsive";
	} else {
		nav.className = "navbar-list-link";
	}
}

window.onscroll = () => scrollFunction();

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.querySelector(".navbar").style.backgroundColor = "#ffffff";
	} else {
		document.querySelector(".navbar").style.backgroundColor = "";
	}
}

// Modal image on Project page gallery

// Get the modal
var modal = document.querySelector(".modal");
// Modal-content block with img
var modalContent = document.querySelector(".modal-content");
var createImg = document.createElement("img");
var captionText = document.querySelector(".caption");
// Add img element into modal-content block
modalContent.appendChild(createImg);

var navbar = document.querySelector(".navbar");
var galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach(el => {
	el.onclick = () => {
		navbar.style.display = "none";
		modal.style.display = "block";
		createImg.src = el.src;
		captionText.innerHTML = el.alt;
	};
});
// Close modal window element
var span = document.querySelector(".close");

span.onclick = function () {
	navbar.style.display = "flex";
	modal.style.display = "none";
};