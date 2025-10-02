const productlistContainer = document.querySelector(".productContainer");
const header = document.querySelector(".heading");
// document.querySelector(".filters").addEventListener("click", showFiltered);

const params = new URLSearchParams(window.location.search);
const categoryID = params.get("category");

console.log(categoryID);

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${categoryID}`)
.then(response => response.json())
.then(data => showProducts(data))

header.innerHTML = `${categoryID}`;
function showProducts(products){

    products.forEach(element => {
        productlistContainer.innerHTML += `<a class="productCard  ${element.soldout && "soldOut"} ${element.discount && "sale"}" href="product.html?id=${element.id}">
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
            }
        );
        };
        // let currentDataSet;
        // let allData = fetch(`https://kea-alt-del.dk/t7/api/products`).then((response => response.json)).then((json) => {allData = json; showProducts(allData);})
        
        // function showFiltered(event){
        //     const gender = event.target.dataset.gender;
        
        //     if(gender == "All"){
        //         showProducts(allData)
        //     }
        //     else {
        //       const udsnit = allData.filter(product => product.gender == gender);
        //       showProducts(udsnit);
        //     }
        // }
