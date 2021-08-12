const mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
function validateForm() {
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach((el) => {
    el.addEventListener("click", function (event) {
      el.classList.add("was-validated");
      event.preventDefault();
    });
  });
}

function myFunction() {
  const element = document.getElementById("navbarNavAltMarkup");
  element.classList.toggle("show");
}
