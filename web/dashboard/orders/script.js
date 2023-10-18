const base_url = "http://localhost:3000";
const token = localStorage.getItem("@taldaboa/userToken");

// const orderInstance = axios.instance({
//   baseURL: base_url,
//   headers:{
//     Authorization: `Bearer ${token}`,
//   },
//   timeout: 2000
// })

const orderRequest = async () => {
  return axios
    .get(`${base_url}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

const updateModal = (data) => {
  const modalWrapper = document.querySelector(".modal-wrapper");
  const productList = document.querySelector(".modal-content ul");

  const modalHeader = document.querySelector(".modal-header");
  modalHeader.children.closeButton.onclick = () => {
    modalWrapper.style.display = "none";
    productList.innerHTML = ""
  };

  modalWrapper.style.display = "flex";

  document.getElementById("orderId").innerText = `ID: ${data.id}`;
  document.getElementById("userName").innerText = `Nome: ${data.user.name}`;
  document.getElementById("userEmail").innerText = `Email: ${data.user.email}`;

  for (const orderItem of data.orderItems) {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${orderItem.product.imgUrl}">
      <p>Nome: ${orderItem.product.title}</p>
      <p>Preço: ${orderItem.product.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</p>
      <p>Quantidade: ${orderItem.quantity}</p>
    `;
    productList.append(li);
  }
};

const detailRequest = async (id) => {
  const response = await axios
    .get(`${base_url}/order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

  updateModal(response);
};

const orderItem = async () => {
  const body = document.querySelector("tbody");
  const orders = await orderRequest();

  for (const { id, date, status, user, totalPrice } of orders) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${id}</td>
      <td>${date}</td>
      <td>${user.name}</td>
      <td>${status}</td>
      <td>${totalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</td>
      <td>Ver</td>
    `;
    body.append(tr);

    const lastTd = tr.children[5];

    lastTd.onclick = () => detailRequest(id);
  }
};

orderItem();
