const menu = "menu.html";
function loadMenu(){
    const menuFrame = document.createElement("iframe");
    menuFrame.src = menu;
    menuFrame.setAttribute("class", "menu")
    document.body.insertBefore(menuFrame, document.body.firstChild);
}

function loadFavicon(){
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = 'assets/init.png';
    document.head.append(faviconLink);
}

window.onload = loadMenu()
window.onload = loadFavicon();
