function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = event.target;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerHTML = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerHTML = "Read Less";
  }
}