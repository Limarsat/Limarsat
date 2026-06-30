document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       FADE ANIMATION
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".card, .gallery-card, .about-box div, .stat, .contact-card"
    );

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold:0.2
    });

    animatedElements.forEach(element => {

        element.classList.add("fade");

        observer.observe(element);

    });

    /* ==========================
       HEADER SCROLL
    ========================== */

    const header = document.querySelector("header");

    function updateHeader(){

        if(window.scrollY > 60){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive:true
    });

});
