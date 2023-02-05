//Gell All Product from Fack Api
function GetAllProduct() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.escuelajs.co/api/v1/products')
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        // console.log(data.length);
        document.getElementById('products').innerHTML = "";

        var str = `<div class="row">`;

        for (var item = 0; item < 12; item++) {
            str += `<div class="col-md-3">
            <div class="product-card">
                <div class="product-card-img">
                    <label class="stock bg-success">In Stock</label>
                    <img src="${data[item].images[0]}"  alt="Laptop">
                </div>
                <div class="product-card-body">
                   
                    <h5 class="product-name">
                       <a href="#" onclick="viewProductDetails(${data[item].id})">
                       ${data[item].title}
                       </a>
                    </h5>
                    <div>
                        <span class="selling-price">$${data[item].price}</span>
                        <span class="original-price">$${data[item].price * .2 + data[item].price}</span>
                    </div>
                    <div class="mt-2">
                        <a  class="btn btn1" onclick=AddToCArt(${data[item].id})>Add To Cart</a>
                         <a  class="btn btn1" onclick=toggleIcon(this,${data[item].id})> <i class="fa fa-heart ${localStorage.getItem("Wishlist" )?JSON.stringify(localStorage.Wishlist).includes(data[item].id) ?"TogglIconFav":"TogglIconFav1":"TogglIconFav1"}"></i> </a>
                        <a  class="btn btn1" onclick='viewProductDetails(${data[item].id})' > View </a>
                    </div>
                </div>
            </div>
        </div>`

        }
        document.getElementById('products').innerHTML += `${str}</div>`


    }
}

//////////////////////////////////////
//Gell All categories from Fack Api
function GetAllCategories() {

    var xhr = new XMLHttpRequest();
   
    xhr.open('GET', 'https://api.escuelajs.co/api/v1/categories')
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        // document.querySelector('#MenuDropdown ul').innerHTML = "";

        var str = '<li selected disabled class="dropdown-item" >All Category</li>'

        for (var item = 0; item < data.length; item++) {
            str += `<li><a class="dropdown-item" onclick='GetProductsByCategory(${data[item].id})'> ${data[item].name}</a></li>`
        }
        
        document.querySelector('#MenuDropdown ul').innerHTML = `${str}`



    }
}
window.onload = GetAllProduct(), GetAllCategories();
/////////////////////////////////////
//Gell All Prducts of a category from Fack Api

function GetProductsByCategory(Category_ID) {
    console.log(Category_ID)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.escuelajs.co/api/v1/categories/${Category_ID}/products`)
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        document.getElementById('products').innerHTML = "";

        var str = `<div class="row">`;

        for (var item = 0; item <data.length; item++) {
            str += `<div class="col-md-3">
            <div class="product-card">
                <div class="product-card-img">
                    <label class="stock bg-success">In Stock</label>
                    <img src="${data[item].images[0]}"  alt="Laptop">
                </div>
                <div class="product-card-body">
                   
                    <h5 class="product-name">
                       <a href="">
                       ${data[item].title}
                       </a>
                    </h5>
                    <div>
                        <span class="selling-price">$${data[item].price}</span>
                        <span class="original-price">$${data[item].price * .2 + data[item].price}</span>
                    </div>
                    <div class="mt-2">
                        <a class="btn btn1" onclick=AddToCArt(${data[item].id})>Add To Cart</a>
                        <a onclick=toggleIcon(this,${data[item].id}) class="btn btn1"> <i class="fa fa-heart ${JSON.stringify(localStorage.Wishlist).includes(data[item].id) ?"TogglIconFav":"TogglIconFav1"}"></i> </a>
                        <a onclick='viewProductDetails(${data[item].id})' class="btn btn1"> View </a>
                    </div>
                </div>
            </div>
        </div>`

        }
        document.getElementById('products').innerHTML += `${str}</div>`
    }
}

//////////////////////////////////////////////
//Get Product Information(Detalies)
function viewProductDetails(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.escuelajs.co/api/v1/products/${id}`)
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        // console.log(data)

        var str = `<div class="row pb-3">
        <div class="col-md-5 mt-3">
    
            <div id="slide" class="carousel slide container" class="bg-white border">
                <div class="carousel-inner" >
                    <div class="carousel-item active" >
                        <img src="${data.images[0]}" class="w-100 imgProduct" alt="Img"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${data.images[1]}"  class="w-100 imgProduct" alt="Img"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${data.images[2]}" class="w-100 imgProduct" alt="Img"/>
                    </div>
    
                </div>
                <button class="carousel-control-prev"  data-bs-target="#slide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  
                </button>
                <button class="carousel-control-next"  data-bs-target="#slide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" ></span>
                    
                </button>
            </div>
        </div>
        <div class="col-md-7 mt-3">
            <div class="product-view">
                <h4 class="product-name">
                    ${data.title}
                    <label class="label-stock bg-primary">In Stock</label>
                </h4>
                <hr>
                <div>
                    <span class="selling-price">$${data.price}</span>
                    <span class="original-price">$${data.price * .2 + data.price}</span>
                </div>
                
                <div class="mt-2">
                    <a  class="btn btn1" onclick=AddToCArt(${id})><i class="fa fa-shopping-cart"></i>  Add To Cart</a>
                    <a  class="btn btn1" onclick=toggleIcon(this,${id}) > <i class="fa fa-heart ${localStorage.getItem("Wishlist")? JSON.stringify(localStorage.Wishlist).includes(id) ?"TogglIconFav":"TogglIconFav1":"TogglIconFav1"}" ></i> Add To Wishlist </a>
                </div>

                <div class="mt-3">
                <div class="card">
                <div class="card-header bg-white">
                    <h4>Description</h4>
                </div>
                <div class="card-body">
                    <p>
                        ${data.description}
    
                    </p>
                </div>
            </div>
            </div>


            </div>
        </div>
    </div>
   `

        
        document.getElementById('products').innerHTML = str




    }
}

///////////////////
//${if(localStorage.getItem('Wishlist')) JSON.stringify(localStorage.Wishlist).includes(data[item].id) ?"TogglIconFav":"TogglIconFav1"}
//toggle Icon Color Favourit
var ArrID ;
if(localStorage.Wishlist!=null && localStorage.Wishlist.length>0)
{
    ArrID = JSON.parse(localStorage.Wishlist);
}
else
{
    ArrID = [];
}
function toggleIcon(ele, id) {
 
    var icon = ele.querySelector("i");

    if (icon.classList.contains('TogglIconFav'))
        icon.classList.remove('TogglIconFav');
    else
        icon.classList.add('TogglIconFav');

        ////////////////////////////

    if (ArrID.includes(id)) {
        ArrID.splice(ArrID.indexOf(id),1)
    }
    else 
    {
        ArrID.push(id);
    }
    localStorage.setItem("Wishlist", JSON.stringify(ArrID));

}

//////////////////////////
// Show My Favorite List for products

function ShowMyWislist(){
var myWislist =JSON.parse(localStorage.Wishlist)

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.escuelajs.co/api/v1/products')
xhr.send();
xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    // console.log(data.filter(function(e){return myWislist.includes(e.id)}));
    var result=data.filter(function(e){ w=JSON.parse(localStorage.Wishlist);return w.includes(e.id)})
    var str = `<div class="row">`;
    console.log(result);
    for (var item=0;item< result.length;item++) {
    console.log(result[item]);

        str += `<div class="col-md-3">
        <div class="product-card">
            <div class="product-card-img">
                <label class="stock bg-success">In Stock</label>
                <img src="${result[item].images[0]}"  alt="Laptop">
            </div>
            <div class="product-card-body">               
                <h5 class="product-name">
                   <a href="#" onclick="viewProductDetails(${result[item].id})">
                   ${result[item].title}
                   </a>
                </h5>
                <div>
                    <span class="selling-price">$${result[item].price}</span>
                    <span class="original-price">$${result[item].price * .2 + result[item].price}</span>
                </div>
                <div class="mt-2">
                    <a  class="btn btn1" onclick=AddToCArt(${result[item].id})>Add To Cart</a>
                    <a  class="btn btn1" onclick=toggleIcon(this,${result[item].id})> <i class="fa fa-heart ${JSON.stringify(localStorage.Wishlist).includes(result[item].id) ?"TogglIconFav":"TogglIconFav1"}"></i> </a>
                    <a  class="btn btn1" onclick='viewProductDetails(${result[item].id})' > View </a>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('products').innerHTML = `${str}</div>`
}
}
var loginUserName=document.getElementById("LoginUserName");
var UN=localStorage.getItem("userName")
loginUserName.innerHTML=UN