/*$(document).ready(function() {

});

function showImg(n)
{
	var i;
	var slides = document.getElementsByClassName("row modal-content");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("numbertext");

	if (n > slides.length) {
		n = 1;
	}
	
	if (n < 1) {
		n = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[n-1].style.display = "block";

	dots[n-1].className += " active";

	captionText.innerHTML = dots[n-1].alt;
}
*/

var totalSlides = 11;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*function currentSlide(n) {

	
  showSlides(slideIndex = n);
}*/

// Thumbnail image controls
function currentSlide(n) {
	//setSlider();
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	//var dots = document.getElementsByClassName("demo");
	//var captionText = document.getElementById("caption");
	
	if (n > totalSlides) {
		slideIndex = 1;
		n = 1;
	}
	
	if (n < 1) {
		slideIndex = slides.length;
		n = totalSlides;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 1; i <= totalSlides; i++) {
		var elem = document.getElementById("img" + i);
		elem.className = "";
	  //dots[i].className = "" //;dots[i].className.replace(" active", "");
	}
	//slides[slideIndex-1].style.display = "block";
	slides[slideIndex-1].style.display = "block";
	var dot = document.getElementById("img" + n);
	dot.className = "img-active";

	var numCount = document.getElementById("divCount");
	numCount.innerText = n + '/' + totalSlides;
	}
	