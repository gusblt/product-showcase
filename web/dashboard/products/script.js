//requisiçao para api GET /product <- retorna uma array com 10 produtos SHOW
//selecionar a lista de produtos (#products-list) SHOW
//iterar e criar um product-item (li) para cada um.

const base_url = "http://localhost:3000";

const getProducts = async () => {
  const response = await fetch(`${base_url}/product`, {
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const productItem = async () => {
  const products = await getProducts();
  const productsList = document.querySelector("#products-list");

  for (const product of products.products) {
    const productItem = document.createElement("li");

    productItem.innerHTML = `
      <li id="${product.id}">
        <img
          src="${product.imgUrl}"
          alt="product image"
        />

        <div class="product-data">
          <h2>${product.title}</h2>
          <p>R$${product.price}</p>

          <div class="product-tags">
            <p>${product.tag}</p>
          </div>
        </div>

        <div class="product-actions">
          <button>Editar</button>
          <button>🗑️</button>
        </div>
      </li>
    `;

    productsList.append(productItem)
  }
};

productItem();
