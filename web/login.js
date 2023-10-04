// requisição post Auth/Login ✅
// requisição post Registro
// Maxima performace e segurança 💀

const base_url = "http://localhost:3000";

export const Login = async (loginInfo) => {
  const response = await fetch(base_url + "/auth", {
    method: "POST",
    body: JSON.stringify(loginInfo),
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const LoginEvent = async () => {
  const form = document.getElementById("login-form");
  const { email, password } = form;

  form.onsubmit = async (evt) => {
    evt.preventDefault();
    const user = { email: email.value, password: password.value };

    const response = await Login(user);
    localStorage.setItem("@taldaboa/userToken", response.token);

    setTimeout(() => {
      window.location.href = "/web/dashboard/index.html";
    }, 2000);
  };
};

LoginEvent();