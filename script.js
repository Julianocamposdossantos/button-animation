let botao = document.querySelector(".click");

let inicia = document.querySelector(".botao_inicia");

let voltar = document.querySelector(".voltar");

let texto = document.querySelector("h1");

let p_botao = document.querySelector(".p_button");


inicia.addEventListener("click", () => {
    botao.classList.toggle("animation");
    botao.classList.remove("volte");
}); 

voltar.addEventListener("click", () => {
    botao.classList.add("volte");
});


botao.addEventListener("click", () => {
    texto.classList.toggle("exibe");
});     