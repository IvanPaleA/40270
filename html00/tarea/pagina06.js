document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const generatePicture = (id) => `
        <figure onclick="mensaje(${id})">
            <img src="https://picsum.photos/id/${id}/200/200" alt="John" class="redonda">
            <figcaption>John</figcaption>
        </figure>`;

    app.innerHTML = Array.from({ length: 3 }, (_, i) => generatePicture(i + 1)).join("");

    // Función para manejar eventos
    window.mensaje = (id) => {
        alert(`Hola ${id}`);
    };

    // Selección de imágenes (corrección en querySelectorAll)
    const lista = document.querySelectorAll("img");
    console.log(lista);
});
