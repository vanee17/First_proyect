window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("abajo",window.scrollY>0);
})