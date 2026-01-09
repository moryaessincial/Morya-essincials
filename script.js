// Toggle menu overlay
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}
function openOrderPopup(product) {
  document.getElementById("orderPopup").style.display = "flex";
  document.getElementById("productName").value = product;
}

function closeOrderPopup() {
  document.getElementById("orderPopup").style.display = "none";
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
