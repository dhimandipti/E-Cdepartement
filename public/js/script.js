let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-times');

}


window.onscroll = () => {
  navbar.classList.remove('active');

}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let interval = setInterval(function () {
  plusSlides(1);
}, 5000);










function updateLastUpdated() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const theDate = new Date(document.lastModified);

  theDate.setTime((theDate.getTime() + (5 * 60 * 60)));
  with (theDate) {
    document.getElementById("last-updated").innerHTML = "<i>Last Updated : " + getDate() + ' ' + months[getMonth()] + ' ' + getFullYear() + ' ' + getHours() + ':' + getMinutes() + " GMT</i>";
  }

}


updateLastUpdated();

// function showDiv(bioId) {
//   let hiddenDiv=document.getElementById("bio");
//   var bioDiv = document.getElementById(bioId);
//   if (bioDiv.style.display === "none") {
//       bioDiv.style.display = "block";
//   } else {
//       bioDiv.style.display = "none";
//   }
// }
 


// ---------for seminar-------------------


// ===========foe numbers=========
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
      counter.innerText = '0';

      const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 100; // Adjust speed of counting

          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCounter, 50); // Speed of counting
          } else {
              counter.innerText = target;
          }
      };

      updateCounter();
  });
});



function showDiv(bioId, element) {
  var bioDiv = document.getElementById(bioId);
  var arrow = element.querySelector(".arrow");

  if (bioDiv.style.display === "none" || bioDiv.style.display === "") {
      bioDiv.style.display = "block";
      arrow.classList.add("rotated");
      arrow.textContent = "▲";
  } else {
      bioDiv.style.display = "none";
      arrow.classList.remove("rotated");
      arrow.textContent = "▼";
  }
}