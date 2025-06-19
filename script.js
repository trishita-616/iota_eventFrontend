gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
    once: false
});
const navbar = document.querySelector("navbar");
if (navbar) {
    window.addEventListener("scroll", () => {        
        const opacity = Math.max(1 - window.scrollY / 200, 0); 
        // navbar.style.background = `rgba(0,0,0,${1 - opacity})`;
        navbar.style.opacity = opacity;
        navbar.style.transition = "background 0.3s, opacity 0.3s";
    });
}
gsap.from(".content-2", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".recent-events h2",
        start: "top 90%",
        toggleActions: "play reset play reset",
    }
});

gsap.from(".recent-events", {
    x: 150,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".events1",
        start: "top 90%",
        toggleActions: "play none none none",
    }
});

gsap.from(".recent-events h2", {
    x: -100,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".recent-events h2",
        start: "top 80%",
        toggleActions: "play reset play reset",
    }
});

const footerH3 = document.querySelector("footer h3");
if (footerH3) {
    const text = footerH3.textContent;
    footerH3.innerHTML = text.split("").map(char =>
        `<span class="footer-h3-letter">${char === " " ? "&nbsp;" : char}</span>`
    ).join("");

    gsap.from(".footer-h3-letter", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
            trigger: footerH3,
            start: "top 90%",
            toggleActions: "play reset play reset",
        }
    });
}

gsap.fromTo(
    ".track", {
    xPercent: -100, 
    repeat: -1,   
    ease: "linear",
    duration: 10, 
},

    {
        xPercent: 0, 
        repeat: -1,    
        ease: "linear",
        duration: 10,  
    }
)

document.getElementById('myLink1').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "lordOfrings.html"; 
    });

document.getElementById('myLink2').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = "connexon.html"; 
    });