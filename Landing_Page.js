const SignUp=document.getElementById('SignUp_Section')
const Login_Up=document.getElementById('Login_Section')
function SignUP(){
    
    SignUp.style.display='block'
    Login_Up.style.display='none'
    // document.body.style.display='none'
}
function Login(){
    SignUp.style.display='none'
    Login_Up.style.display='block'
    
}