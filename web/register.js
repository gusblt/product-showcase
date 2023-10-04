import { Login } from "./login.js";

const base_url = "http://localhost:3000";

const Register = async (registerInfo) => {
  const response = await fetch(base_url + "/user", {
    method: "POST",
    body: JSON.stringify(registerInfo),
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const RegisterEvent = async () => {
  const form = document.getElementById("register-form");
  const errorMsg = document.getElementById("email-error");

  const { email, password, age, name, confirmEmail } = form;

  form.onsubmit = async (evt) => {
    evt.preventDefault();

    switch (email.value === confirmEmail.value) {
      case false:
        return (errorMsg.style.display = "block");
      case true:
        errorMsg.style.display = "";
    }

    const newUser = {
      email: email.value,
      password: password.value,
      age: age.value,
      name: name.value,
    };

    await Register(newUser).then((res) => {
      res.id && localStorage.setItem("@taldaboa/userId", res.id);
    });

    const token = await Login({
      email: newUser.email,
      password: newUser.password,
    });

    localStorage.setItem("@taldaboa/userToken", token.token );

    setTimeout(window.location.reload(), 500)
  };
};

RegisterEvent();
