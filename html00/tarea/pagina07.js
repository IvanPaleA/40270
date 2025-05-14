document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío por defecto

        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;

        console.log("Usuario:", user);
        console.log("Contraseña:", password);

        // Asigna valores al formulario y envía la búsqueda a Google
        form.action = "https://www.google.com/search";
        document.getElementById("user").setAttribute("name", "q");
        form.submit();
    });
});
