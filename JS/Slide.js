// Which image you clicked on

const imageNavigationLabel = document.querySelector(".image-navigation");

imageNavigationLabel.addEventListener("click", e => {
  const targetLabel = e.target.closest("label");

  if(!targetLabel) return;

  const currentSquare = imageNavigationLabel.querySelector(".current-square");

  currentSquare.classList.remove("current-square");
  targetLabel.classList.add("current-square");
})