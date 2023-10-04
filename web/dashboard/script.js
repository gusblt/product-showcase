// Selecionar o botao de logout ✅
// evento onlcick ✅
// limpar o localstorage localstorage.clear() ✅
// window.reload() ✅

const Logout = () => {
  localStorage.clear();
  location.reload();
};

const LogoutEvent = () => {
  const btn = document.getElementById("logout");
  btn.onclick = Logout;
};

LogoutEvent();

// fazer uma requisição GET para /user ✅
// Se a requisição retornar o codigo 403 / 401, callback -> Logout() ✅
// Se retornar codigo 200, selecionar o p do .profile e mudar para o nome do usuario

const base_url = "http://localhost:3000";

const Request = async () => {
  const token = localStorage.getItem("@taldaboa/userToken");

  const response = await fetch(base_url + "/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const SetUserInfo = async () => {
  const response = await Request();
  const user = await response.json();

  switch (response.status) {
    case 401 || 403:
      return Logout;
    case 200:
      document.getElementById("nomeDoUser").innerText =
        "Olá, " + user.name + ".";
      document.getElementById("name").innerText = user.name;
      document.getElementById("age").innerText = user.age;
      document.getElementById("email").innerText = user.email;
  }
};

SetUserInfo();
