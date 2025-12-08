// Datos de productos
const productsData = [
    { id: 1, title: 'accesorios prueba', price: 4000, img: 'https://via.placeholder.com/240x140?text=Laptop' },
    { id: 2, title: 'Ropa Talla', price: 199, img: 'https://via.placeholder.com/240x140?text=Monitor' },
    { id: 3, title: 'Ropa Talla', price: 89, img: 'https://via.placeholder.com/240x140?text=Audífonos' },
    { id: 4, title: 'Ropa Talla', price: 499, img: 'https://via.placeholder.com/240x140?text=Cámara' },
    { id: 5, title: 'Ropa Talla', price: 79, img: 'https://via.placeholder.com/240x140?text=Teclado' },
    { id: 6, title: 'Pantalon Talla 14 ejemplo', price: 5000, img: 'https://via.placeholder.com/240x140?text=Consola' }
];

const productsContainer = document.getElementById('products');
const template = document.getElementById('card-template');
const searchInput = document.getElementById('search');

// Renderizar productos (Sin botón de agregar)
function renderProducts(list) {
    productsContainer.innerHTML = '';
    list.forEach(p => {
        const node = template.content.cloneNode(true);
        node.querySelector('.thumb').src = p.img;
        node.querySelector('.thumb').alt = p.title;
        node.querySelector('.title').textContent = p.title;
        node.querySelector('.price').textContent = '$' + p.price;
        // Se eliminó el eventListener del botón
        productsContainer.appendChild(node);
    });
}

// Filtrar búsqueda
searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = productsData.filter(p => p.title.toLowerCase().includes(q));
    renderProducts(filtered);
});

// Scroll al hacer click en CTA
document.getElementById('cta').addEventListener('click', () => {
    document.querySelector('.items').scrollIntoView({ behavior: 'smooth' });
});

// Render inicial
renderProducts(productsData);