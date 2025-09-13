// ==== Hàm tiện ích ====

// Lấy giỏ hàng từ localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Lưu giỏ hàng vào localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Format tiền VNĐ
function formatPrice(price) {
    return Number(price.replace(/\./g, "").trim()).toLocaleString("vi-VN") + " VNĐ";
}

// ==== Thêm sản phẩm vào giỏ ====
function themVaoGio(sp) {
    let cart = getCart();
    let existing = cart.find(item => item.id === sp.id && item.type === sp.type);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: sp.id,
            type: sp.type,   // để phân biệt mèo/chó/...
            name: sp.name,
            price: sp.price,
            img: sp.img,
            quantity: 1
        });
    }

    saveCart(cart);
    alert(`Đã thêm vào giỏ: ${sp.name}`);
}

// ==== Hiển thị giỏ hàng (trang cart.html) ====
function renderCart() {
    const cartTable = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    if (!cartTable || !totalEl) return; // Nếu không phải trang giỏ thì thoát

    let cart = getCart();
    cartTable.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let itemPrice = Number(item.price.replace(/\./g, "").trim());
        total += itemPrice * item.quantity;

        let row = `
            <tr>
                <td><img src="${item.img}" class="cart-item-img" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                        class="form-control form-control-sm" 
                        onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
        cartTable.innerHTML += row;
    });

    totalEl.textContent = total.toLocaleString("vi-VN") + " VNĐ";
}

// ==== Cập nhật số lượng ====
function updateQuantity(index, newQuantity) {
    let cart = getCart();
    cart[index].quantity = parseInt(newQuantity);
    saveCart(cart);
    renderCart();
}

// ==== Xóa sản phẩm ====
function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

// ==== Khi load trang cart.html ====
document.addEventListener("DOMContentLoaded", renderCart);

// Xuất ra global để gọi từ HTML
window.themVaoGio = themVaoGio;
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;
