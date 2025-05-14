document.addEventListener("DOMContentLoaded", function() {
    const btnMostrar = document.getElementById("btnMostrar");
    const tabla = document.getElementById("tablaAlumnos");

    btnMostrar.addEventListener("click", function() {
        loadXMLDoc();
    });

    function loadXMLDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const xmlDoc = xhttp.responseXML;
            const students = xmlDoc.getElementsByTagName("STUDENT");
            mostrarTabla(students);
        }
        xhttp.open("GET", "alum_catalog.xml");
        xhttp.send();
    }

    function mostrarTabla(students) {
        let tableContent = "<tr><th>NOMBRE</th><th>ID</th></tr>";
        for (let i = 0; i < students.length; i++) {
            const nombre = students[i].getElementsByTagName("NAME")[0].textContent;
            const id = students[i].getElementsByTagName("ID")[0].textContent;
            tableContent += `<tr><td>${nombre}</td><td>${id}</td></tr>`;
        }
        tabla.innerHTML = tableContent;
    }
});