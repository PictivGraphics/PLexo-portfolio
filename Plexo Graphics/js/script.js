





const words = [
    "Creative Graphic Designer",
    "Brand Identity Designer",
    "UI / UX Designer",
    "Freelancer"
    ];
    
    let i = 0;
    let j = 0;
    let current = "";
    let isDeleting = false;
    
    function typingEffect() {
    
        const text = document.getElementById("typing");
    
        if (!isDeleting) {
            current = words[i].substring(0, j++);
        } else {
            current = words[i].substring(0, j--);
        }
    
        text.innerHTML = current;
    
        if (!isDeleting && j === words[i].length + 1) {
            isDeleting = true;
            setTimeout(typingEffect, 1500);
            return;
        }
    
        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    
        setTimeout(typingEffect, isDeleting ? 50 : 100);
    }
    
    typingEffect();

    // rating animation

   
    const reviewSwiper = new Swiper(".reviewSwiper", {


        effect:"coverflow",
        
        
        centeredSlides:true,
        
        
        slidesPerView:3,
        
        
        spaceBetween:40,
        
        
        loop:true,
        
        
        speed:1000,
        
        
        
        autoplay:{
        
        
        delay:3000,
        
        
        disableOnInteraction:false
        
        
        },
        
        
        
        coverflowEffect:{
        
        
        rotate:0,
        
        
        stretch:80,
        
        
        depth:250,
        
        
        modifier:1.3,
        
        
        slideShadows:false
        
        
        },
        
        
        
        breakpoints:{
        
        
        0:{
        
        
        slidesPerView:1
        
        
        },
        
        
        768:{
        
        
        slidesPerView:3
        
        
        },
        
        
        1200:{
        
        
        slidesPerView:3
        
        
        }
        
        
        
        }
        
        
        
        });

        // STATISTICS

        // NUMBER COUNTER ANIMATION


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


counter.innerText="0";


const updateCounter = () => {


const target = +counter.getAttribute("data-target");


const current = +counter.innerText;


const increment = target / 100;



if(current < target){


counter.innerText = Math.ceil(current + increment);


setTimeout(updateCounter,10);


}else{


counter.innerText = target;


}



};


updateCounter();


});










function showUpdatePopup() {
    document.getElementById("updatePopup").classList.add("active");
}

function closeUpdatePopup() {
    document.getElementById("updatePopup").classList.remove("active");
}

// Click outside popup to close
document.getElementById("updatePopup").addEventListener("click", function(e) {
    if (e.target === this) {
        closeUpdatePopup();
    }
});

// Press ESC to close
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeUpdatePopup();
    }
});








// =========================
// PLEXO GRAPHICS
// WELCOME POPUP
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const welcomePopup =
        document.getElementById("welcomePopup");

    const welcomeBtn =
        document.getElementById("welcomeBtn");


    // Show popup when website loads

    setTimeout(function () {

        welcomePopup.classList.add("active");

    }, 500);


    // Close popup

    welcomeBtn.addEventListener("click", function () {

        welcomePopup.classList.remove("active");

    });

});