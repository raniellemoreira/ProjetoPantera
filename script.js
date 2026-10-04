/* =========================
   ANIMAÇÃO DAS SEÇÕES
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {

    section.classList.add("reveal");
    observer.observe(section);

});


/* =========================
   BOTÕES DOS PROJETOS
========================= */

const botoesProjeto = document.querySelectorAll(".botao-projeto");

botoesProjeto.forEach((botao) => {

    botao.addEventListener("click", () => {

        const card = botao.closest(".projeto-card");

        card.classList.toggle("aberto");

        if (card.classList.contains("aberto")) {

            botao.textContent = "Fechar detalhes";

        } else {

            botao.textContent = "Ver detalhes";

        }

    });

});


/* =========================
   BARRA DE PROGRESSO
========================= */

const barraProgresso = document.querySelector("#barraProgresso");

function atualizarBarraProgresso() {

    const alturaTotal =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const distanciaPercorrida = window.scrollY;

    if (alturaTotal <= 0) {
        barraProgresso.style.width = "0%";
        return;
    }

    const porcentagem =
        (distanciaPercorrida / alturaTotal) * 100;

    barraProgresso.style.width = `${porcentagem}%`;

}

window.addEventListener("scroll", atualizarBarraProgresso);

atualizarBarraProgresso();
/* =========================
   NAVEGAÇÃO ATIVA
========================= */

const linksNavegacao = document.querySelectorAll(".link-navegacao");

const observerNavegacao = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            linksNavegacao.forEach((link) => {
                link.classList.remove("ativo");
            });

            const linkAtual = document.querySelector(
                `.link-navegacao[href="#${entry.target.id}"]`
            );

            if (linkAtual) {
                linkAtual.classList.add("ativo");
            }

        }

    });

}, {
    threshold: 0.45
});

sections.forEach((section) => {
    observerNavegacao.observe(section);
});