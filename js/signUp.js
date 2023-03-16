let userNameUp = document.querySelector("#userUp")
let passwrodUp = document.querySelector("#passUp")
let emailUp = document.querySelector("#emailUp")
let btnUp = document.querySelector("#btnUp")
function signUp(e){
    e.preventDefault()
    if(userNameUp.value =="" || passwrodUp.value==""||emailUp.value==""){
        alert("Please Fill All Fields")
    }
    else{
        if(localStorage.getItem("users")==null){
            localStorage.setItem("users","[]")
        }
        if(localStorage.getItem("passwords")==null){
            localStorage.setItem("passwords","[]")
        }
        if(localStorage.getItem("emails")==null){
            localStorage.setItem("emails","[]")
        }
        let oldUser = JSON.parse(localStorage.getItem("users"))
        let oldEmail = JSON.parse(localStorage.getItem("emails"))
        let oldPass = JSON.parse(localStorage.getItem("passwords"))
        oldUser.push(userNameUp.value.trim().toLowerCase())
        oldEmail.push(emailUp.value.trim())
        oldPass.push(passwrodUp.value.trim())
        localStorage.setItem("users",JSON.stringify(oldUser))
        localStorage.setItem("passwords",JSON.stringify(oldPass))
        localStorage.setItem("emails",JSON.stringify(oldEmail))
        setTimeout(()=>{
            window.location.href = "signIn.html"
        },1000)
    }
}
btnUp.onclick = signUp

