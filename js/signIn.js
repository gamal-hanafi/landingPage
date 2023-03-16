// local storage 
// users
let usersIn = localStorage.getItem("users")
let xusers = JSON.parse(usersIn)
// passwords
let passIn = localStorage.getItem("passwords")
let xpasswords = JSON.parse(passIn)

// Html
let userNameIn = document.querySelector("#userIn")
let passwrodIn = document.querySelector("#passIn")
let btnIn = document.querySelector("#btnIn")
function signIn(e) {
    let user = xusers.find((item)=> item == userNameIn.value.trim().toLowerCase())
    let password = xpasswords.find((item)=> item == passwrodIn.value.trim())
    e.preventDefault()
    if(userNameIn.value.trim() == "" || passwrodIn.value.trim()==""){
        alert("Please Fill The Info")
    }
    else if(userNameIn.value.trim().toLowerCase() != user || passwrodIn.value.trim() != password){
        alert("Wrong Email Or Password")
    }
    else{
        if(xusers.indexOf(user) == xpasswords.indexOf(password)){
            setTimeout(()=>{
                window.location.href = "index.html"
            })
            localStorage.setItem("user",user)
        }
        else{
            alert("Wrong Email Or Password")
        }
    }
}
btnIn.onclick = signIn
