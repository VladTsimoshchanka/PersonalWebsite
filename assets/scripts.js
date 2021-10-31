
var openButton = document.getElementById("contactButton");
var submitButton = document.getElementById("submitButton");
var closeButton = document.getElementById("CloseButton");


submitButton.addEventListener('click', () => {
    var menu = document.getElementById("contactMenu");
    closeMenu(menu);
    var name = document.getElementById("submitName");
    var message = document.getElementById("submitMessage");
    name.value = "";
    message.value = "";
    alert("Your message was sent to me. Thank you for having interest in me!");
})
openButton.addEventListener('click', () => {
    var menu = document.getElementById("contactMenu");
    openMenu(menu);
})
closeButton.addEventListener('click', () => {
    var menu = document.getElementById("contactMenu");
    closeMenu(menu);
})

function openMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu(menu){
    if (menu == null){
        return;
    }
    menu.classList.remove("active");
    overlay.classList.remove("active");
}