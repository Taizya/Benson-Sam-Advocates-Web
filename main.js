
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// hover drop down animation
const dropdownButton = document.getElementById('dropBtn');
const dropdownMenu = document.getElementById('dropDownContent');
const dropDown = document.getElementById('dropdown')

dropdownButton.addEventListener('mouseover', function() {
    dropdownMenu.style.opacity = '1';
    dropdownMenu.style.transitionDelay = '0.5s';
    dropdownMenu.style.display = 'block'
});

dropDown.addEventListener('mouseleave', function() {
    dropdownMenu.style.opacity = '0';
    dropdownMenu.style.transitionDelay = '0s';
});


const dropdownButton1 = document.getElementById('dropBtn1');
const dropdownMenu1 = document.getElementById('dropDownContent1');
const dropDown1 = document.getElementById('dropdown1')

dropdownButton1.addEventListener('mouseover', function() {
    dropdownMenu1.style.opacity = '1';
    dropdownMenu1.style.transitionDelay = '0.5s';
    dropdownMenu1.style.display = 'block'
});

dropDown1.addEventListener('mouseleave', function() {
    dropdownMenu1.style.opacity = '0';
    dropdownMenu1.style.transitionDelay = '0s';
});

function scrollToSection() {
    const targetSection = document.getElementById('practiceSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
