// ===========================
// LIMARSAT APP
// ===========================

// تأثير ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".card,.about-box div").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===========================
// زر الرجوع للأعلى

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// السنة الحالية في Footer

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Limarsat | Germany";

}
