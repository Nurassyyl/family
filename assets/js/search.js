const searchBtn = document.querySelector(".nav-menu-search");
const searchBtnClose = document.querySelector(".close-search-modal");
const searchModal = document.querySelector(".search");

searchBtn.addEventListener('click', () => {
          searchModal.style.display = "block";
})

searchBtnClose.addEventListener('click', () => {
          searchModal.style.display = "none";
})
