document.querySelector("#my-button").addEventListener("click", showNav);

function showNav() {
    document.querySelector("#mynav").classList.toggle("show");
    document.querySelector(".logo").classList.toggle("hideLogo");
}