// app.js

// Exemple de données de produits
const products = [
    { id: 1, name: 'Produit 1', price: 19.99, image: 'product1.jpg', rating: 4.5 },
    { id: 2, name: 'Produit 2', price: 29.99, image: 'product2.jpg', rating: 3.8 },
    // Ajoutez d'autres produits selon vos besoins
];

// Fonction pour afficher le catalogue de produits
function displayProductCatalog() {
    const catalogSection = document.getElementById('productCatalog');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Prix: $${product.price}</p>
            <p>Évaluation: ${product.rating}</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        catalogSection.appendChild(productDiv);
    });
}

// Fonction de recherche de produits
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProductCatalog(filteredProducts);
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Logique pour ajouter le produit au panier
    // ...

    updateCartUI(); // Met à jour l'interface utilisateur du panier
}

// Fonction pour mettre à jour l'interface utilisateur du panier
function updateCartUI() {
    const cartItemsSection = document.getElementById('cartItems');
    // Logique pour afficher les éléments du panier dynamiquement
    // ...
}

// Appel initial pour afficher le catalogue de produits
displayProductCatalog();
