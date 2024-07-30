window.addEventListener("scroll", function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(255, 22, 28, 0.5)";
    } else {
        header.style.backgroundColor = "transparent";
    }
});
