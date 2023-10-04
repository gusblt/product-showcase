// Verificar se existe o token no local storage ✅
// Se tiver, fazer requisiçao para obter os dados do usuario
// Se não tiver, redirecionar para a pagina de login ✅
// Se tiver e for invalido ou expirado, redirecionar para a pagina de login ✅

const VerifyAuth = () => {
  const token = localStorage.getItem("@taldaboa/userToken");
  const url = window.location.pathname;
  if (
    (token && url === "/web/index.html") ||
    (token && url === "/web/cadastro.html") ||
    (token && url === "/web/")
  )
    return (window.location.href = "/web/dashboard/index.html");

  if (
    (!token && url === "/web/dashboard/") ||
    (!token && url === "/web/dashboard/index.html")
  ) {
    window.location.href = "/web/index.html";
  }
};

VerifyAuth();
