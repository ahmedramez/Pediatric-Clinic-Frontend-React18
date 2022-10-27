let backToTopButton = document.getElementById("back-to-top-btn");
if (backToTopButton) {

    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
            ? (backToTopButton.style.display = "block")
            : (backToTopButton.style.display = "none");
    }
    backToTopButton.addEventListener("click", scrollPageToTop);
    function scrollPageToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}