document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const username = document.getElementById('username');
  const username_error = document.getElementById('username_error');
  const password = document.getElementById('password');
  const password_error = document.getElementById('password_error');

  form.addEventListener('submit', (e) => {

    if(username.value == '' || username.value === null){
      e.preventDefault();
      username_error.innerHTML = "Username is required";
      username_error.style.display = "block";

  } else {
      username_error.style.display = "none"; 
  }

  if(password.value == '' || password.value === null){
    e.preventDefault();
    password_error.innerHTML = "Valid Password is required ";
    password_error.style.display = "block";
}else {
    password_error.style.display = "none"; 
}


  });

});


const FormOpenButton = document.querySelector("#FormOpen"),
  FormcloseBTN = document.querySelector(".form_close"),
  psShowHide = document.querySelectorAll(".pw_hide");


FormOpenButton.addEventListener("click", () => {
  document.querySelector(".home").classList.add("show");
}); 

FormcloseBTN.addEventListener("click", () => {
  document.querySelector(".home").classList.remove("show");
});


psShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    const getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text"; 
      icon.classList.replace("uil-eye-slash", "uil-eye"); 
    } else {
      getPwInput.type = "password"; 
      icon.classList.replace("uil-eye", "uil-eye-slash"); 
    }
  });
});
const togglebtn = document.querySelector('.toggle-btn')
const togglebtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

togglebtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
}


