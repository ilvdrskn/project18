window.onload = function() {
    document.getElementsByClassName("menu-svg")[0].onclick = function() {
        document.getElementsByClassName("modal-menu")[0].classList.remove("closeModal");
        document.getElementsByClassName("svg-close")[0].onclick = function() {
            document.getElementsByClassName("modal-menu")[0].classList.add("closeModal");
        }
    }
}