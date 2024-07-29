let currentPalette = 0;
    const palettes = [
        {
            body: "#f8f4f2",
            nav: "#5eaaa8",
            hover: "#8dbbae",
            titulo: "#f0d9c8",
            p: "#fff"
        },
        {
            body: "#f6f6f6",
            nav: "#6d6875",
            hover: "#9b8f9e",
            titulo: "#ded4d9",
            p: "#ffffff"
        },
        {
            body: "#fff",
            nav: "#1a237e",
            hover: "#2962ff",
            titulo: "#ff5722",
            p: "#f5f5f5"
        }
    ];

    function changeColors() {
        const body = document.querySelector('body');
        const nav = document.querySelector('navigation');
        const links = document.querySelectorAll('a');
        const titulo = document.querySelector('.nav-item');
        const paragraphs = document.querySelectorAll('p');

        body.style.backgroundColor = palettes[currentPalette].body;
        nav.style.backgroundColor = palettes[currentPalette].nav;
        links.forEach(link => {
            link.style.backgroundColor = palettes[currentPalette].nav;
        });
        titulo.style.backgroundColor = palettes[currentPalette].titulo;
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = palettes[currentPalette].p;
        });

        currentPalette++;
        if (currentPalette >= palettes.length) {
            currentPalette = 0;
        }
    }