document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    
    const generatePicture = (id) => `
        <figure>
            <img src="https://picsum.photos/id/${id}/200/200" alt="John">
            <figcaption>John</figcaption>
        </figure>`;

    app.innerHTML = Array.from({ length: 3 }, (_, i) => generatePicture(i + 1)).join("");
});
