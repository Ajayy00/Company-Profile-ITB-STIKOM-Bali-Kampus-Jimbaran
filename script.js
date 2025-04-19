let prevScrollpos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    let scrollUpDistance = 0;
    const showAfter = 100; // pixel scroll ke atas sebelum navbar muncul

    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        // Kalau user sudah dekat bagian atas halaman, tampilkan navbar langsung
        if (currentScrollPos <= 50) {
            navbar.style.top = "0";
            scrollUpDistance = 0;
            prevScrollpos = currentScrollPos;
            return;
        }

        if (currentScrollPos < prevScrollpos) {
            // Scroll ke atas
            scrollUpDistance += prevScrollpos - currentScrollPos;

            if (scrollUpDistance > showAfter) {
                navbar.style.top = "0"; // tampilkan navbar
            }
        } else {
        // Scroll ke bawah
        scrollUpDistance = 0;
        navbar.style.top = "-100px"; // sembunyikan navbar
    }

    prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

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


const carouselItems = document.querySelectorAll('.carousel-item');
const isMobile = window.innerWidth <= 768;

if (!isMobile) {
    carouselItems.forEach(item => {
      const overlay = item.querySelector('.carousel-overlay');
      let timeout;
  
      item.addEventListener('mouseenter', () => {
        clearTimeout(timeout); // biar gak bentrok
        overlay.classList.add('show');
      });
  
      item.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          overlay.classList.remove('show');
        }, 1500); // waktu delay
      });
    });
  }
  
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
        },
        1440: {
            slidesPerView: 3,
            centeredSlides: true
        },
        1920: {
            slidesPerView: 3,
            centeredSlides: true
        }
    }
});