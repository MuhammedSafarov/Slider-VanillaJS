const slides = document.querySelectorAll(".slider");
let dots = document.querySelectorAll(".pagination-btn");
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
let currentPage = 0;

function showPage(pageIndex) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((num) => {
    num.classList.remove("active");
  });

  const startIndex = pageIndex * 3;
  const endIndex = startIndex + 2;
  for (let i = startIndex; i <= endIndex; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }
  dots[pageIndex].classList.add("active");
}

function nextPage() {
  currentPage++;
  if (currentPage >= Math.ceil(slides.length / 3)) {
    currentPage = 0;
  }
  showPage(currentPage);
}

function previousPage() {
  currentPage--;
  if (currentPage < 0) {
    currentPage = Math.ceil(slides.length / 3) - 1;
  }
  showPage(currentPage);
}

function goToPage(pageIndex) {
  currentPage = pageIndex;
  showPage(currentPage);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToPage(index);
  });
});

showPage(currentPage);
setInterval(nextPage, 4000);

rightBtn.addEventListener("click", nextPage);
leftBtn.addEventListener("click", previousPage);
