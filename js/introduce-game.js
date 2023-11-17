var slideIndex = 1;
var slideInterval = setInterval(function() {
  plusSlides(1);
}, 1000);

function plusSlides(n) {
  clearInterval(slideInterval); // 清除定时器
  showSlides(slideIndex += n);
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 1000); // 重新启动定时器
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
