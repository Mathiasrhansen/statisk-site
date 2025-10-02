const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.querySelector("h1").textContent = category;

const productListContainer = document.querySelector(".productContainer");

document.querySelector(".filters").addEventListener("click", showFiltered);

document.querySelector(".sorting").addEventListener("click", showSorted);

function showSorted(event) {
    const direction = event.target.dataset.direction;
    if (direction == "lohi") {
        currentDataSet.sort((a, b) => a.price - b.price);
    } else {
        currentDataSet.sort((a, b) => b.price - a.price);
    }
    showProducts(currentDataSet);
}

function showFiltered(event) {
    console.log(event.target.dataset.gender);
    const gender = event.target.dataset.gender;
    if (gender == "All") {
        currentDataSet = allData;
    } else {
        const udsnit = allData.filter(product => product.gender == gender);
        currentDataSet = udsnit;
    }
    showProducts(currentDataSet);
}

let allData, currentDataSet;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=30&category=${category}`)
    .then((response) => response.json())
    .then((data) => {
        allData = currentDataSet = data;
        showProducts(allData);
    });


function showProducts(products) {
    productListContainer.innerHTML = "";
    products.forEach((element) => {
        productListContainer.innerHTML += `<a class="productCard  ${element.soldout && "soldOut"} ${element.discount && "sale"}" href="product.html?id=${element.id}">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="" class="productImg" />
              <p class="productName">${element.productdisplayname}</p>
              <div class="descriptor">
                <p class="type">${element.articletype}</p>
                <p class="decoration">|</p>
                <p class="brand">${element.brandname}</p>
              </div>
              <p class="price ${element.discount && "onSale"}">${element.price},-</p>
              <p class="salePrice ${element.discount && "salePrice"}">${Math.round(element.price*(element.discount/100))},-</p>
              </a>`
    });
}