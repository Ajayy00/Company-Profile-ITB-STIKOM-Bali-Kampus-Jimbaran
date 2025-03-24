function openPopup(videoSrc) {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");
    video.src = videoSrc;
    popup.style.display = "flex";
    video.play();
}

function closePopup() {
    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("popupVideo");
    video.pause();
    video.currentTime = 0;
    popup.style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("videoPopup");
    if (event.target == popup) {
        closePopup();
    }
}

document.addEventListener("keydown", function(event) {
    const video = document.getElementById("popupVideo");
    if (event.key === "Escape") {
        closePopup();
    } else if (event.key === "ArrowRight") {
        video.currentTime += 5;
    } else if (event.key === "ArrowLeft") {
        video.currentTime -= 5;
    }
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});