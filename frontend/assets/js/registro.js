document.getElementById("form-user").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const user = { nombre, email, usuario, password };

  try {
    const response = await fetch("http://localhost:5501/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    alert("Usuario registrado: " + JSON.stringify(data));
  } catch (err) {
    console.error("Error registrando usuario:", err);
  }
});
