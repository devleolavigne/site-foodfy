const modalOverlay = document.querySelector(".modal-overlay");
const receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
  receita.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });
}

document.querySelector(".fechar").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
