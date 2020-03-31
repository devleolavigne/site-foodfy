const modalOverlay = document.querySelector(".modal-overlay");
const receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
  receita.addEventListener("click", () => {
    const imgReceita = receita.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = `assets/${imgReceita}`;
  });
}

document.querySelector(".fechar").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
