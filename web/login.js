// requisição post Auth/Login ✅
// requisição post Registro
// Maxima performace e segurança 💀

const base_url = "http://localhost:3000";

export const Login = async (loginInfo) => axios.post(`${base_url}/auth`, loginInfo).then((res) => res.data);


const LoginEvent = async () => {
  const form = document.getElementById("login-form");
  const error = document.querySelector(".error-message");
  const { email, password } = form;

  form.onsubmit = async (evt) => {
    evt.preventDefault();
    const user = { email: email.value, password: password.value };

    const response = await Login(user);

    if (!response.token) {
      error.style.display = "block";
      email.classList.add("error");
      password.classList.add("error");
    } else {
      localStorage.setItem("@taldaboa/userToken", response.token);

      error.style.display = "none";
      email.classList.remove("error");
      password.classList.remove("error");

      setTimeout(() => {
        window.location.href = "/web/dashboard/index.html";
      }, 2000);
    }
  };
};

LoginEvent();
