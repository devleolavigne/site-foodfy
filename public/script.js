const modalOverlay = document.querySelector(".modal-overlay");
const receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
  receita.addEventListener("click", () => {
    const imgReceita = receita.getAttribute("id");
  });
}
