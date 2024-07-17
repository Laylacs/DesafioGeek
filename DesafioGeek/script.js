document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;
    
    if(name && price && image) {
        const productGrid = document.querySelector('.product-grid');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>$ ${price}</p>
            <button class="delete-btn">🗑️</button>
        `;
        
        productCard.querySelector('.delete-btn').addEventListener('click', function() {
            productCard.remove();
        });
        
        productGrid.appendChild(productCard);
        
        document.getElementById('add-product-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
