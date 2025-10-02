const categoryList = document.querySelector(".categoryListContainer");

fetch("http://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then(categories => showCategories(categories));

function showCategories(categories){
    categories.forEach(category => {
        categoryList.innerHTML += `<a class="category" href="productlist.html?category=${category.category}">${category.category}</a>`
        
    });
}