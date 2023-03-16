// Local Sotrage
let itemSotrage =JSON.parse(localStorage.getItem("data"))
let badge = document.querySelector(".badge")

// Html
let productsParentCart = document.querySelector(".productsOfCarts")


function drawCartsProducts(){
    let draw = products.map((item)=>{
        arrSotrage = JSON.parse(localStorage.getItem("arr"))
        for(var i = 0 ; i<products.length;i++){
            arr[i]= arrSotrage ? arrSotrage[i] : 0
            if(item.id == i+1 && arr[i] != 0){
                return `
                    <div class="product-item col-xl col-md-5 mt-md-3">
                        <div class="product-box border rounded">
                        <div class="product-desc">
                            <p class="counterCart">${arr[i]} X</p>
                            <h2 class="text-light">${item.title}</h2>
                            <p>${item.price}</p>
                        </div>
                        <div class="product-img"><img src=${item.imgSrc} alt="T-shirt" ></div>
                        <div class="product-func mb-2">
                            <button class="add_to_cart btn btn-outline-light" onclick=removeCart(${item.id})>Remove</button>
                        </div>
                        </div>
                    </div>  
                    `
            }
        }
    })
    console.log(draw)
    productsParentCart.innerHTML = draw
    badge.innerHTML = itemSotrage.length
    
}  
drawCartsProducts()
let child = document.querySelectorAll(".product-item")
function removeCart(id){
    let choosemItemIndex = itemSotrage.findIndex((item)=>item.id == id)
    let choosemItem = products.find((item)=>item.id == id)
    itemSotrage.splice(choosemItemIndex,1)
    for(var i = 0 ; i<products.length;i++){
        arr[i]= arrSotrage ? arrSotrage[i] : 0
        if(choosemItem.id == i+1){
            if(arr[i] == 0){
                child[i].remove()
            }
            else{
                arr[i]--
              
            }
        }
    }
    localStorage.setItem("arr",JSON.stringify(arr))
    localStorage.setItem("data",JSON.stringify(itemSotrage))
    badge.innerHTML = itemSotrage.length
    drawCartsProducts()
    drawDivs()
}


    