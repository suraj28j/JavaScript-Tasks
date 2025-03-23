let products = [
    {
        id: 101,
        productName: "Samsung Galaxy A16",
        price: "₹ 15,499",
        rating: 3.2,
        src:"./images/A16.png"
    },
    {
        id: 102,
        productName: "Samsung Galaxy S24",
        price: "₹ 59,999",
        rating: 3.6,
        src:"./images/S24 5G.webp"
    },
    {
        id: 103,
        productName: "Samsung Galaxy M15",
        price: "₹ 11999",
        rating: 3.9,
        src:"./images/S24.webp"
    },
    {
        id: 104,
        productName: "Samsung Galaxy S25",
        price: "₹ 80,999",
        rating: 4.1,
        src:"./images/S25.webp"
    }
]


let productsContainer = document.querySelector(".products_container");

function display() {
    products.forEach((product) => {
        let item = document.createElement('div');
        item.setAttribute("class", "item");

        // Product Image
        const img = document.createElement('img');
        img.src = product.src;
        img.setAttribute('alt',`${product.productName}`);
        
        // Product Title 
        const h2 = document.createElement('h2');
        h2.innerText = product.productName;

        // Product Price
        const h3 = document.createElement('h3');
        h3.innerText = product.price;

        // ---- Product Rating ----- //
        const p = document.createElement('p');
        for (let j = 0; j < 5; j++) {
            if (product.rating > 0.5) {
                let i = document.createElement("i");
                i.setAttribute('class', 'fa-solid fa-star');
                p.appendChild(i);
                product.rating--;
            } else {
                if (product.rating > 0 && product.rating < 1) {
                    let i = document.createElement("i");
                    i.setAttribute('class', 'fa-regular fa-star-half-stroke');
                    p.appendChild(i);
                    product.rating--;
                } else {
                    let i = document.createElement("i");
                    i.setAttribute('class', 'fa-regular fa-star');
                    p.appendChild(i);
                }
            }
        }
        // ------x------x------- //

        item.appendChild(img);
        item.appendChild(h2);
        item.appendChild(h3)
        item.appendChild(p)

        productsContainer.appendChild(item)
    })
}
display();