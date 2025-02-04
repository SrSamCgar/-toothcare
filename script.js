document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación básica (puedes cambiarla según tus necesidades)
    if (username === "usuario" && password === "contraseña") {
        alert("Inicio de sesión exitoso");
        // Redirige a otra página o realiza alguna acción
        // window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Usuario o contraseña incorrectos";
    }
});
