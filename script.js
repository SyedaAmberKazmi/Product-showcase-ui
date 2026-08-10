document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.querySelector(".foot-panel1");
    if (backToTopBtn) {
        backToTopBtn.style.cursor = "pointer";
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// SEARCH BAR FUNCTIONALITY
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

function performSearch() {
    if (searchInput && searchInput.value.trim() !== "") {
        alert("Searching for:" + searchInput.value);
    } else{
        alert("Please type something in the search bar!");
    }
}

if (searchIcon){
    searchIcon.style.cursor = "pointer";
    searchIcon.addEventListener("click", performSearch);
}

if (searchInput){
    searchInput.addEventListener("keypress", (event) =>{
        if (event.key === "Enter") {
            performSearch();
        }
    });
}

// ALL PANEL MENU CLICK
const panelAll = document.querySelector(".panel-all");

if (panelAll){
    panelAll.style.cursor = "pointer";
    panelAll.addEventListener("click", () => {
        alert("Menu Clicked!");
    });
}
//LocalStorage Check
let cartCount = Number(localStorage.getItem('cartCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Cart display 
function updateCartDisplay(){
    const cartElement = document.getElementById('cart-count');
    if (cartElement){
        cartElement.innerText = cartCount;
    }
}

//Page load display
updateCartDisplay();

function addToCart(productName){
    cartCount++;
    cartItems.push(productName);


localStorage.setItem('cartCount', cartCount);
localStorage.setItem('cartItems', JSON.stringify(cartItems));
updateCartDisplay();
}

//Elements target
const discountElement = document.getElementById('product-discount');
const priceElement = document.getElementById('product-price');

//Dynamic values set
function updatePriceDetail(newDiscount, dollarAmount, centsAmount){
    //Discount Update
   discountElement.innerText = `-${newDiscount}%`;

//Price update
priceElement.innerHTML = `<sup>$</sup>${dollarAmount}<sup>${centsAmount}</sup>`;
}
//function call
updatePriceDetail(20, 39, 99);


function performSearch() {
    const  inputElement = document.getElementById("searchInput")

    if (!inputElement){
        alert("Error: searchInput ID nahi mili!");
        return;
    }
     const input = inputElement.value.toLowerCase().trim();

if (input === ""){
    alert("Please enter a keyword to search!");
    return;
}

    if (input.includes("makeup") || input.includes("beauty")){
        window.location.href = "makeup.html";
    }
    else if (input.includes("health") || input.includes("care")){
       window.location.href = "health.html"; 
 }
  else if (input.includes("clothes")|| input.includes("fashion")){
      window.location.href = "clothes.html";
  } 
  else {
    alert("product not found! Try searching 'health or 'clothes'.");
  }
  }

document.addEventListener("DOMContentLoaded",function () {
    const searchInput = document.getElementById("searchInput");
    if (searchInput){
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter"){
                performSearch();
      }
        });
    }
});

function getStaeRating(rating){
    let starsHTML = "";
    for (let i = 1; i <= 5; i++){
        if(i <= Math.floor(rating)){
            starsHTML += '<span style="color: #ffa41c:">&#97333;</span';
        } else{
            starsHTML +=  '<span style="color: #ccc:">&#97334;</span';
        }
    } 
    return starsHTML;
}

//PRODUCT DETAIL
const productImages =['box9-image.jpg' , 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentImgIndex = 0;

function updateMainImage(index){
    currentImgIndex = index;
    document.getElementById("main-product-img") .src = productImages[currentImgIndex];

    // Highlight active thumbnail
    const thumbs = document.querySelectorAll('.thumb-img');
    thumbs.forEach(function (t, i)  {
        if(i === currentImgIndex) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });
}

function  nextImage() {
    currentImgIndex = (currentImgIndex + 1) % productImages.length;
    updateMainImage(currentImgIndex);
}

function prevImage() {
    currentImgIndex = (currentImgIndex - 1 + productImages.length)%
    productImages.length;
    updateMainImage(currentImgIndex);
}
 
function changeImage(imgSrc, index){
    updateMainImage(index);
}




