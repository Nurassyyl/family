const windowInnerWidth = window.innerWidth;
const body = document.body;
// const overflowHidden = document.querySelector(".overflow-hidden");
const menuBtnOpen = document.querySelector(".nav-menu-menu");
const menuBtnClose = document.querySelector(".close-menu-btn");
const menuBtnCloseTablet = document.querySelector(".close-menu-btn-tablet");
const menuBtnClosePhone = document.querySelector(".close-menu-btn-phone");
const menuDesktop = document.querySelectorAll(".bg-transparent");
const menuTablet = document.querySelector(".modal-menu-tablet");
const menuPhone = document.querySelector(".modal-menu-phone");

console.log(menuDesktop[1]);


if (windowInnerWidth > 769) {
          menuBtnOpen.addEventListener('click', () => {
                    menuDesktop.style.display = "block";
                    body.classList.add("overflow-hidden");
          })

          menuBtnClose.addEventListener('click', () => {
                    menuDesktop.style.display = "none";
                    body.classList.remove("overflow-hidden");
          })
} else if (windowInnerWidth > 480) {
          menuBtnOpen.addEventListener('click', () => {
                    // menuTablet.style.display = "block";
                    menuDesktop[1].style.display = "block";
                    body.classList.add("overflow-hidden");
          })

          menuBtnCloseTablet.addEventListener('click', () => {
                    // menuTablet.style.display = "none";
                    menuDesktop[1].style.display = "none";
                    body.classList.remove("overflow-hidden");
          })

} else {
          menuBtnOpen.addEventListener('click', () => {
                    // menuPhone.style.display = "block";
                    menuDesktop[2].style.display = "block";
                    body.classList.add("overflow-hidden");
          })

          menuBtnClosePhone.addEventListener('click', () => {
                    // menuPhone.style.display = "none";
                    menuDesktop[2].style.display = "none";
                    body.classList.remove("overflow-hidden");
          })

}



