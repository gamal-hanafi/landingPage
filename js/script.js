
//Local Storage
let data = localStorage.getItem("data")

let userSotrage = localStorage.getItem("user")
/// Products
let productsParent = document.querySelector(".productsParent")
let badge = document.querySelector(".badge")

let car = document.querySelector(".carts_product")



function drawProducts(){
    let draw = products.map((item)=>{
        return `
        <div class="product-item col-xl col-md-5 mt-md-3">
            <div class="product-box border rounded">
            <div class="product-desc">
                <h2 class="text-light">${item.title}</h2>
                <p>${item.price}</p>
            </div>
            <div class="product-img"><img src=${item.imgSrc} alt="T-shirt" ></div>
            <div class="product-func mb-2">
                <button class="add_to_cart btn btn-outline-light" onclick=addCart(${item.id})>Add</button>
                <i class="far fa-heart icon-heart"></i>
            </div>
            </div>
        </div> 
        `
    })
    productsParent.innerHTML = draw
    badge.innerHTML = addItem.length
}   


function addToFavourite(iconHeart){
    iconHeart.forEach((item)=>{
        item.onclick = function(){
            item.style.color = "rgba(0,212,255,1)"
 
        }
    })
}


let addItem = data ? JSON.parse(data) : []


function addCart(id){
    if(user){
    let choosemItem = products.find((item)=>item.id == id)
    addItem = [...addItem,choosemItem]
    localStorage.setItem("data",JSON.stringify(addItem))
    for(var i = 0 ; i<products.length;i++){
        arr[i]= arrSotrage ? arrSotrage[i] : 0
        if(choosemItem.id == i+1){
            arr[i]++
            console.log(arr[i])
        }
    }
    badge.innerHTML = addItem.length
    localStorage.setItem("arr",JSON.stringify(arr))
    drawDivs()
    }
    else{
        setTimeout(()=>{
            window.location.href = "signIn.html"
        },500)
    }
}
window.onload= function(){
    drawProducts()

    let iconHeart = document.querySelectorAll(".fa-heart")
    addToFavourite(iconHeart)
}