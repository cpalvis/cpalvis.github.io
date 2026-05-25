const menu = "menu.html";
function loadMenu(){
    const menuFrame = document.createElement("iframe");
    menuFrame.src = menu;
    menuFrame.setAttribute("class", "menu")
    document.body.insertBefore(menuFrame, document.body.firstChild);
}



window.onload = loadMenu()


const resNavButton = document.getElementById('nav-res-btn');
resNavButton.addEventListener("click", () => {
    window.location.href = "resume.html";
});