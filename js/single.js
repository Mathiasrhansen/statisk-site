const productContainer = document.querySelector(".productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(params);
console.log(id);

// skift id (de sidste tal i linket) for at ændre produktet
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`).then(res => res.json()).then(product => {console.log(product.brandname)

productContainer.innerHTML = `<img https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" class="productImg" />
        <div class="text">
          <div class="descriptor">
            <h1 class="productName">${product.productdisplayname}</h1>
            <p>Price: <span>DKK ${product.price},-</span></p>
            <p>Color: <span>${product.basecolour}</span></p>
            <p>Brand: <span>${product.brandname}</span></p>
            <p>
              Description:
              <span>
                Made with fabric that breathes to assist fast moisture transfer,
                this training garment fabric actively wicks away perspiration.
                Designed for male athletes and sportsmen, this is an ideal
                training garment, especially in cool weather conditions.
              </span>
            </p>
            <p>
              Model statistics:
              <span
                >The model wears trousers, length of 42"<br />Height-5.11",
                Waist-31"
              </span>
            </p>
          </div>
          <div class="purchase">
            <form action="">
              <label for="">Size:</label>
              <select name="" id="">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
              </select>
            </form>
            <a class="basketBtn" href="">Add to basket</a>
          </div>
        </div>
        <div class="backBtn">
          <a href="productlist.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
            >
              <path
                d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7V8V9ZM1 8V9H31V8V7H1V8Z"
                fill="#333333"
              />
            </svg>
          </a>
        </div>`;
});