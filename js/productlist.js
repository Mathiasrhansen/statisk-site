const productlistContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20`)
.then(response => response.json())
.then(data => showProducts(data))

function showProducts(products){

    products.forEach(element => {
        console.log(element);
    
        productlistContainer.innerHTML += `<a class="productCard" id="1572" href="product.html">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="" class="productImg" />
              <p class="productName">${element.productdisplayname}</p>
              <div class="descriptor">
                <p class="type">${element.articletype}</p>
                <p class="decoration">|</p>
                <p class="brand">${element.brandname}</p>
              </div>
              <p class="price">${element.price},-</p>
              <p class="salePrice"></p>
            </a>`
});
};
