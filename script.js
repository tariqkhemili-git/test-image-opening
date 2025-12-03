const huskyImage = document.getElementById("husky-image");
const closeBtn = document.getElementById("close-btn");
const main = document.querySelector("main");

huskyImage.addEventListener("click", () => {
  if (!huskyImage.classList.contains("active")) {
    huskyImage.classList.add("active");
    main.style.backgroundColor = "hsl(216, 13%, 10%)";
    closeBtn.style.visibility = "visible";
  }
});

main.addEventListener("click", (e) => {
  if (huskyImage.classList.contains("active") && e.target !== huskyImage) {
    huskyImage.classList.remove("active");
    main.style.backgroundColor = "hsl(216, 13%, 30%)";
    closeBtn.style.visibility = "hidden";
  }
});

closeBtn.addEventListener("click", () => {
  huskyImage.classList.remove("active");
  main.style.backgroundColor = "hsl(216, 13%, 30%)";
  closeBtn.style.visibility = "hidden";
});
