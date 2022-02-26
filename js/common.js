document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector("#burger-btn");
    const navTop = document.querySelector("#nav-top");

    burgerButton.addEventListener("click", () => {
        navTop.classList.toggle("active");
    });
});
