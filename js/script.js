// Menu Mobile Toggle
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");
    // Animação básica do ícone hamburger
    hamburger.classList.toggle("toggle-active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".menu-list a").forEach(link => {
    link.addEventListener("click", () => menuList.classList.remove("active"));
});

// Animação de Revelar ao Rolar (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .servico-card, .procedimento-card");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Executar uma vez no carregamento
reveal();