let currentPalette = 0;
const palettes = [{
        // Paleta normal com tom azulado
        body: "#e6f0ff",
        nav: "#4d94ff",
        hover: "#80bfff",
        titulo: "#99ccff",
        p: "#333"
    },
    {
        // Paleta para Protanopia
        body: "#f0f0f0",
        nav: "#595959",
        hover: "#8c8c8c",
        titulo: "#cccccc",
        p: "#333" 
    },
    {
        // Paleta para Deuteranopia
        body: "#f2f2f2",
        nav: "#737373",
        hover: "#a6a6a6",
        titulo: "#d9d9d9",
        p: "#333" 
    },
    {
        // Paleta para Tritanopia
        body: "#f5f5f5",
        nav: "#99ccff",
        hover: "#b3e0ff",
        titulo: "#ccebff",
        p: "#333" 
    }
];



function changeColors() {
    const body = document.querySelector('body');
    const nav = document.querySelector('.navigation');
    const links = document.querySelectorAll('.nav-menu a');
    const titulo = document.querySelector('.nav-item');
    const paragraphs = document.querySelectorAll('p');

    // Mudança da cor de fundo da página
    body.style.backgroundColor = palettes[currentPalette].body;

    // Atualização das cores do navbar e dos elementos internos
    nav.style.backgroundColor = palettes[currentPalette].nav;
    links.forEach(link => {
        link.style.color = "#fff";
        link.style.backgroundColor = palettes[currentPalette].nav;
    });
    titulo.style.backgroundColor = palettes[currentPalette].titulo;
    titulo.style.color = "#fff";
    paragraphs.forEach(paragraph => {
        paragraph.style.backgroundColor = palettes[currentPalette].p;
        paragraph.style.color = "#333";
    });

    currentPalette++;
    if (currentPalette >= palettes.length) {
        currentPalette = 0;
    }
}