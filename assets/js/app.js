let navicon = document.querySelector(".nav-icon");
let lgview = document.querySelector(".lg-view");
navicon.addEventListener("click", () => {
    lgview.classList.toggle("show");
});
$(".parentslider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});
let mybutton = document.getElementsByClassName("top-arrow")[0];

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
