const SignUp=document.getElementById('SignUp_Section')
const Login_Up=document.getElementById('Login_Section')
const Password=document.getElementById('Or_Pass')
const ConformPass=document.getElementById('Dup_Pass')
// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.getElementById("Header-Section");
//     header.style.opacity = "1"; // Fade in slowly
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     const infoPart = document.querySelector(".Info-Part");
//     infoPart.style.opacity='1'
//   });

// // Add this JavaScript code to your existing JavaScript file (Landing_Page.js)
// document.addEventListener("DOMContentLoaded", function () {
//     const signupsection = document.getElementById("SignUp_Section");
//     signupsection.style.left = "116px"; // Slide in from the left
//   });




function SignUP(){
    
    SignUp.style.display='block'
    Login_Up.style.display='none'
    // document.body.style.display='none'
}
function Login(){
    SignUp.style.display='none'
    Login_Up.style.display='block'
    
}

function ValidateForm() {
  let passwordInput = document.getElementById("Or_Pass");
  let Email=document.getElementById('Form_mail')
  let confirmPasswordInput = document.getElementById("Dup_Pass");
  passwordInput.style.borderColor = '';
  confirmPasswordInput.style.borderColor = '';

  
  if(!passwordInput.value)
  {
    passwordInput.style.borderColor='red'
    return false
    }
  else if (passwordInput.value === confirmPasswordInput.value) {

      return true
  } else {
        confirmPasswordInput.style.borderColor='red' 
      return false
    }
}



            ///Authenticaion Images
            // Define an array of image sources

// Define an array of image sources
