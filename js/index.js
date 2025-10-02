const categoryList = document.querySelector(".categoryListContainer");
let counter = 0;

fetch("http://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then(categories => showCategories(categories));

function showCategories(categories){
    categories.forEach(category => {
        counter ++;
        categoryList.innerHTML += `<a class="category" id="${counter}" href="productlist.html?category=${category.category}">${category.category}</a>`
        
    });
}