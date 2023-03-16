// local sotrage
let user = localStorage.getItem("user")
let arrSotrage = JSON.parse(localStorage.getItem("arr"))
let arr = arrSotrage ? arrSotrage :[]
// html
let userName = document.querySelector(".user")
let icon = document.querySelector(".icon-cart")
let links = document.querySelector(".in_up")
let carProudcut = document.querySelector(".carts_product")
let logOut = document.querySelector("#logOut")
let userInfo = document.querySelector(".user-info")
let carDiv = document.querySelector(".carts_product div")
let counters = []
let products = [
    {id:1,title:"T-shirt",imgSrc:"imgs/blank-1886001_1920.png",price:"EGP 250"},
    {id:2,title:"Cap",imgSrc:"imgs/hat-2525910_1920.png",price:"EGP 200"},
    {id:3,title:"Boot",imgSrc:"imgs/walking-boots-3074971_1920.png",price:"EGP 500"},
    {id:4,title:"Watch",imgSrc:"imgs/63-wristwatch-png-image.png",price:"EGP 800"}
]


if(user){
    links.remove()
    userName.innerHTML = user
    userInfo.style.display = "flex"
    icon.onclick = toogleCart
    logOut.onclick = logOutFunc
}


function drawDivs(){
    let draw = products.map((item)=>{
        arrSotrage = JSON.parse(localStorage.getItem("arr"))
        for(var i = 0 ; i<products.length;i++){
            arr[i]= arrSotrage ? arrSotrage[i] : 0
            if(item.id == i+1 && arr[i] != 0){
        return `
                <div class="thumbnail">
                    <div><span class="thumbnail-counter">${arr[i]} X</span><img src=${item.imgSrc} alt="div" srcset="" width="50px" height="50px"></div>
                </div>
                ` 
            }
        }
    })
    localStorage.setItem("arr",JSON.stringify(arr))
    carDiv.innerHTML = draw
}


function toogleCart(){
    if(carProudcut.style.display != "block"){
        carProudcut.style.display = "block"
    }
    else{
        carProudcut.style.display = "none"
    }
}

function logOutFunc(){
    setTimeout(()=>{
        window.location.href = "signIn.html"
    },1000)
    localStorage.removeItem("user")
    localStorage.removeItem("data")
    localStorage.removeItem("arr")
}
drawDivs()
