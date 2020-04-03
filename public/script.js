const receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
  receita.addEventListener("click", () => {
    const imgReceita = receita.getAttribute("id");
    window.location.href = `/receita/${imgReceita}`;
  });
}
