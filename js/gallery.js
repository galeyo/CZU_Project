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