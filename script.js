const btn = document.querySelector(".btn-submit");
const inputs = document.querySelectorAll(".form-box input").value;
const Email = document.querySelector(".email");
const lastName = document.querySelector(".last-name");
const firstName = document.querySelector(".first-name");
const Password = document.querySelector(".password")
btn.addEventListener("click", () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Email.value.match(mailformat))
      {
          Email.nextElementSibling.innerHTML = ""; 
          Email.classList.remove("alert-icon"); 
    }else{
        Email.nextElementSibling.innerHTML = "Looks like this is not an email"; 
        Email.classList.add("alert-icon");
    }
    if(lastName.value === ""){
        lastName.nextElementSibling.innerHTML = "Last Name cannot be empty";  
        lastName.classList.add("alert-icon");
    }else{
        lastName.nextElementSibling.innerHTML = ""; 
        lastName.classList.remove("alert-icon"); 
    }
    if(firstName.value === ""){
        firstName.nextElementSibling.innerHTML = "First Name cannot be empty";  
        firstName.classList.add("alert-icon");
    }else{
        firstName.nextElementSibling.innerHTML = ""; 
        firstName.classList.remove("alert-icon"); 
    }
    if(Password.value === ""){
        Password.nextElementSibling.innerHTML = "Password cannot be empty";  
        Password.classList.add("alert-icon");
    }else{
        Password.nextElementSibling.innerHTML = "";  
        Password.classList.remove("alert-icon");
    }
    console.log(Email.value);
})