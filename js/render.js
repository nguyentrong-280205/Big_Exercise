document.addEventListener("DOMContentLoaded", function () {
    const renderProductList = (products, containerId, type) => {
        const productListContainer = document.getElementById(containerId);
        if (!productListContainer) return;

        products.forEach(product => {
            const productHtml = `
                <div class="col-md-3 mb-4">
                    <div class="product-card border p-3 rounded shadow-sm h-100 ms-5">
                        <a href="chitiet_sp.html?type=${type}&id=${product.id}" 
                           style="text-decoration: none; color: inherit;">
                            <img src="${product.img}" class="img-fluid mb-2" alt="${product.name}">
                            <h6 style="font-weight: bold;">${product.name}</h6>
                            <p>${product.desc}</p> 
                        </a>
                        <div class="cost d-flex justify-content-between align-items-center mt-2">
                            <p class="text-danger fw-bold mb-0">Giá: ${product.price}đ</p>
                            <button class="btn" style="border: 1px solid red" 
                                onclick="themVaoGio({id: ${product.id}, type: '${type}', name: '${product.name}', price: '${product.price}', img: '${product.img}'})">
                                <i class="bi bi-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productListContainer.innerHTML += productHtml;
        });
    };

    renderProductList(window.meo, "list-meo", "meo");
    renderProductList(window.cho, "list-cho", "cho");
    renderProductList(window.giuongnem, "list-giuongnem", "giuongnem");
    renderProductList(window.vatdung, "list-vatdung", "vatdung");
});
