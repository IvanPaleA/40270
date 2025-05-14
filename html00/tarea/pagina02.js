async function fetchData(url, type = "text") {
    try {
        const response = await fetch(url);
        const data = await response.text();
        
        if (type === "xml") {
            const parser = new DOMParser();
            return parser.parseFromString(data, "application/xml").getElementsByTagName("CD");
        }
        
        return data.split("\n").filter(line => line.trim() !== "");
    } catch (error) {
        console.error(`Error al cargar ${url}:`, error);
        return [];
    }
}

function renderTable(data, headers, elementId) {
    let table = `<tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr>`;
    
    data.forEach(row => {
        table += `<tr>${row.map(value => `<td>${value}</td>`).join("")}</tr>`;
    });

    document.getElementById(elementId).innerHTML += table;
}

async function init() {
    // Cargar datos desde personas.txt
    const textData = await fetchData("personas.txt");
    renderTable(textData.map(name => [name]), ["Nombre"], "demo");

    // Cargar datos desde cd_catalog.xml
    const cdData = await fetchData("cd_catalog.xml", "xml");
    const formattedData = Array.from(cdData).map(cd => [
        cd.querySelector("ARTIST")?.textContent || "N/A",
        cd.querySelector("TITLE")?.textContent || "N/A"
    ]);
    renderTable(formattedData, ["Artista", "Título"], "demo");
}

init();
