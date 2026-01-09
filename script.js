// Toggle menu overlay
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Order modal
function openOrderForm(productName) {
    document.getElementById('product-name').value = productName;
    document.getElementById('quantity').value = document.querySelector('.quantity').value; // From card
    document.getElementById('order-modal').style.display = 'block';
}

function closeOrderForm() {
    document.getElementById('order-modal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
function openOrder(product) {
    document.getElementById("orderModal").classList.add("active");
    document.getElementById("productName").value = product;
}

function closeOrder() {
    document.getElementById("orderModal").classList.remove("active");
}
