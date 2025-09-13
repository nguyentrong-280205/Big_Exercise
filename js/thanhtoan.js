document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  let total = 0;
  cart.forEach(item => {
    // Chuyển price từ "148.000" → 148000
    let price = parseInt(item.price.toString().replace(/\./g, ''), 10);

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <img src="${item.img}" alt="${item.name}" width="50" class="me-2">
        ${item.name} <span class="badge bg-secondary ms-2">x${item.quantity}</span>
      </div>
      <span class="text-danger fw-bold">${(price * item.quantity).toLocaleString()}đ</span>
    `;
    cartItemsContainer.appendChild(li);

    total += price * item.quantity;
  });
  totalPriceElement.textContent = total.toLocaleString() + "đ";

  // Xử lý khi submit form
  document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (cart.length === 0) {
      alert("Giỏ hàng trống, vui lòng thêm sản phẩm trước khi thanh toán.");
      return;
    }

    alert(`Cảm ơn ${name}!\nĐơn hàng của bạn sẽ được giao đến:\n${address}\nSĐT: ${phone}\nTổng tiền: ${total.toLocaleString()}đ`);

    localStorage.removeItem("cart"); // Xóa giỏ sau khi đặt hàng
    window.location.href = "index.html"; // Quay về trang chủ
  });
});
function handleCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const name = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  let total = parseInt(document.getElementById("totalPrice").textContent.replace(/\D/g, ''), 10);

  if (cart.length === 0) {
    alert("Giỏ hàng trống, vui lòng thêm sản phẩm trước khi thanh toán.");
    return;
  }

  alert(`Cảm ơn ${name}!\nĐơn hàng của bạn sẽ được giao đến:\n${address}\nSĐT: ${phone}\nTổng tiền: ${total.toLocaleString()}đ`);

  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

