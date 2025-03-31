
// Inicijalizacija proizvoda
const products = [
    { id: 1, name: "Pametan telefon", price: 1500, oldPrice: 1800, category: "electronics", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Sportske tenisice", price: 600, oldPrice: 800, category: "clothing", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Luksuzni sat", price: 2500, oldPrice: 3000, category: "accessories", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Laptop", price: 3000, oldPrice: 3500, category: "electronics", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Džemper", price: 800, oldPrice: 1000, category: "clothing", image: "https://via.placeholder.com/200" }
];

let cart = [];

// Funkcija za prikaz proizvoda
function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="price">${product.price} RSD <span class="old-price">${product.oldPrice} RSD</span></p>
            <button class="add-to-cart" data-id="${product.id}">Dodaj u korpu</button>
        `;
        productList.appendChild(productElement);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            addToCart(products.find(product => product.id == productId));
        });
    });
}

// Funkcija za dodavanje proizvoda u korpu
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    alert(`${product.name} je dodat u korpu!`);
}

// Funkcija za ažuriranje broja proizvoda u korpi
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Pretraga proizvoda
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
}

// Filtriranje proizvoda
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (priceRange !== 'all') {
        const [minPrice, maxPrice] = priceRange.split('-').map(val => parseInt(val));
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && (maxPrice ? product.price <= maxPrice : true));
    }

    displayProducts(filteredProducts);
}

// Početno prikazivanje svih proizvoda
displayProducts(products);


// Inicijalizacija proizvoda
const products = [
    { id: 1, name: "Pametan telefon", price: 1500, oldPrice: 1800, category: "electronics", image: "https://via.placeholder.com/200", description: "Pametan telefon sa naprednim funkcijama." },
    { id: 2, name: "Sportske tenisice", price: 600, oldPrice: 800, category: "clothing", image: "https://via.placeholder.com/200", description: "Komforne sportske tenisice za svaki dan." },
    { id: 3, name: "Luksuzni sat", price: 2500, oldPrice: 3000, category: "accessories", image: "https://via.placeholder.com/200", description: "Elegantan sat sa savremenim dizajnom." },
    { id: 4, name: "Laptop", price: 3000, oldPrice: 3500, category: "
