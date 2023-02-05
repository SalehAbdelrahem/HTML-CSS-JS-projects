var arr;
var counter = document.getElementById('CountCart');
var t = 0;
var GlopalIndex;
if (localStorage.myproducts != null) { arr = JSON.parse(localStorage.myproducts); }
else { arr = []; }


////////////////////
window.onload = reloadCart();

function reloadCart () {
    var newValue = 0;
    if (localStorage.myproducts != null) {
        var sizeCounter = JSON.parse(localStorage.myproducts);
        for (var i = 0; i < sizeCounter.length; i++) {
            newValue += sizeCounter[i].quantity;
        }
    }
    counter.innerHTML = `<i class="fa fa-shopping-cart" id="CountCart"></i> Cart (${newValue})`
}

///////////////
function AddToCArt(id) {
 
    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.escuelajs.co/api/v1/products/${id}`)

    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4) {
            var productInfo = JSON.parse(xhr.responseText)

            //console.log(user.data.id);
            var obj = {
                name: productInfo.title,
                id: productInfo.id,
                img: productInfo.images[0],
                price: productInfo.price,
                quantity: 1
            };

            let searchObject = arr.find((obj) => obj.id == id);
            GlopalIndex = arr.indexOf(searchObject);

            if (searchObject) {
                arr[GlopalIndex].quantity += 1;
                localStorage.myproducts = JSON.stringify(arr);

                // alert("This product is already added to cart");  
            }
            else {
                arr.push(obj);
                localStorage.setItem("myproducts", JSON.stringify(arr));
            }

            // console.log(arr);
            // var newValue = parseInt(counter.innerHTML) + 1;
            var newValue = 0;
            for (var i = 0; i < arr.length; i++) {
                newValue += arr[i].quantity;
            }
            // var newValue =   arr.length;              
            counter.innerHTML = `<i class="fa fa-shopping-cart" id="CountCart"></i> Cart (${newValue})`


        }
    })
}

function show() {
    let cart = document.getElementById('products');
    let table = ``;
    if(localStorage.getItem("myproducts"))
    {
        arr = JSON.parse(localStorage.myproducts);
  
    // for (let i = 0; i < arr.length; i++) {
    //     table +=`<div id="cardds">
    //     <div id="cardd" class="cardd">
    //     <img src=${arr[i].img} alt="Denim Jeans" style="width:150px;height:200px border-radius:4px"> 
    //     </div>
    //      <div class="o"> 
    //      <h1>${arr[i].name}</h1>
    //      <p class="price">$ ${arr[i].price}</p>
    //      <p>Some text about the jeans. Super slim and jeamsun denim lorem jeansum.</p>
    //      <button id="plus" onclick="plus(${i})"> +</button>
    //      <button>${arr[i].quantity}</button>
    //      <button id="minus" onclick="minus(${i})"> - </button>
    //      <p><button id='remove' onclick='deletItem(${i})'>Remove</button></p>
    //      </div>
    //      <hr></div>`

    // }

    table+=` <div class="shopping-cart"> <div class="cart-header d-none d-sm-none d-mb-block d-lg-block">
    <div class="row">
        <div class="col-md-6">
            <h4>Products</h4>
        </div>
        <div class="col-md-2">
            <h4>Price</h4>
        </div>
        <div class="col-md-2">
            <h4>Quantity</h4>
        </div>
        <div class="col-md-2">
            <h4>Remove</h4>
        </div>
    </div>
</div>`

    for (let i = 0; i < arr.length; i++) {
        table+=`
        <div class="cart-item">
            <div class="row">
                <div class="col-md-6 my-auto">
                    <a href="">
                        <label class="product-name">
                            <img src="${arr[i].img}" style="width: 150px; height: 150px ; border-radius:15px" alt="">
                            ${arr[i].name}
                        </label>
                    </a>
                </div>
                <div class="col-md-2 my-auto">
                    <label class="price">$ ${arr[i].price} </label>
                </div>
                <div class="col-md-2 col-7 my-auto">
                    <div class="quantity">
                        <div class="input-group">
                            <span class="btn btn1" onclick="minus(${i})"><i class="fa fa-minus"></i></span>
                            <input type="text" value="${arr[i].quantity}" class="input-quantity" />
                            <span class="btn btn1" onclick="plus(${i})"><i class="fa fa-plus"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-5 my-auto">
                    <div class="remove">
                        <a onclick='deletItem(${i})' class="btn btn-danger btn-sm">
                            <i class="fa fa-trash"></i> Remove
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
    cart.innerHTML = table+"</div>";
    // if (t <= 0)
    //     t = 0;
    // var newValue = arr.length;
    // counter.innerHTML = newValue;
}



function plus(i) {
    arr[i].quantity += 1;
    localStorage.myproducts = JSON.stringify(arr);
    // t += 1;
    reloadCart();
    show();
}
function plus1(i,ele) {
    arr[i].quantity += 1;
    localStorage.myproducts = JSON.stringify(arr);
    // t += 1;
    reloadCart();
   ele.previousSibling.value+=1
}
function minus(i) {
    if (arr[i].quantity > 1) {
        arr[i].quantity -= 1;
        // t -= 1;
    }
    else
        arr[i].quantity = 1;

    // t-=1;   
    localStorage.myproducts = JSON.stringify(arr);
    reloadCart()
    show();
}



function deletItem(indx) {

    arr.splice(indx, 1);
    localStorage.myproducts = JSON.stringify(arr);

    // var newValue = parseInt(counter.innerHTML) - 1;
    var newValue = arr.length;
    if (newValue <= 0)
        counter.innerHTML = 0;
    else
        counter.innerHTML = `<i class="fa fa-shopping-cart" id="CountCart"></i> Cart (${newValue})`;

    t = 0;
    reloadCart()

    show();
    //	console.log(arr);
}