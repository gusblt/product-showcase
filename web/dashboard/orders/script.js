
//Fazer o GET para /orders

const base_url = "http://localhost:3000";
const token = localStorage.getItem("@taldaboa/userToken");


const orderRequest = async () => {
  return axios.get(`${base_url}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }).then((res) => res.data)
};
