var slideIndex = [1, 1];

function plusSlides(n, index) {
  showSlides(slideIndex[index] += n, index);
}

function showSlides(n, index) {
  var i;
  var slides = document.querySelectorAll('.images')[index].getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex[index] = 1 }
  if (n < 1) { slideIndex[index] = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[index] - 1].style.display = "block";
}

setInterval(function () {
  plusSlides(1, 0);
  plusSlides(1, 1);
}, 2000);