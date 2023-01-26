window.onload = function() {
    document.getElementsByClassName("menu-svg")[0].onclick = function() {
        document.getElementsByClassName("modal-menu")[0].classList.remove("closeModal");
        document.getElementsByClassName("main-container")[0].classList.add("hide");
        document.getElementsByClassName("svg-close")[0].onclick = function() {
            document.getElementsByClassName("modal-menu")[0].classList.add("closeModal");
            document.getElementsByClassName("main-container")[0].classList.remove("hide");
        }
    }
    
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i ++) {
        items[i].onclick = function() {
            this.classList.toggle("hiden");

        }
    }
}