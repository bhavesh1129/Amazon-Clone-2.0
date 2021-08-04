function getItems() {
    db.collection("items")
        .get()
        .then((querySnapshot) => {
            let items = [];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    image: doc.data().Image,
                    name: doc.data().Name,
                    brand: doc.data().Brand,
                    ratings: doc.data().Ratings,
                    price: doc.data().Price,
                });
            });
            generateItems(items);
        });
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
        <div class="product">

        <div class="product-image bg-white w-40 h-24 rounded-lg flex items-center justify-center p-2 cursor-pointer">
            <img class="w-full h-full object-contain" src="${item.image}">
        </div>

        <div class="product-name text-gray-700 font-bold text-sm">
            ${item.name}
        </div>

        <div class="product-make text-green-700 font-bold">
            ${item.brand}
        </div>

        <div class="product-rating text-yellow-400 text-sm font-bold">
            ⭐⭐⭐⭐⭐${item.ratings}
        </div>

        <div class="product-price font-bold text-gray-700 text-md">
            ${item.price}
        </div>

        <div class="add-to-cart font-medium  cursor-pointer text-sm h-7 w-24 bg-yellow-500 flex items-center text-white justify-center rounded-lg hover:bg-yellow-600">
            Add to cart
        </div>
    </div>
    `
    });
    document.querySelector(".main-section-products").innerHTML = itemsHTML;
}
getItems();