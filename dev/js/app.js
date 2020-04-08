'use strict';

import '../scss/app.scss';

(() => {
    setInterval(() => {
        let sliders = document.querySelectorAll('.slider');

        sliders.forEach(() => {
            let currentSlide = document.querySelector('.active-slide'),
                next = currentSlide.nextElementSibling;

            console.log(next);

            if (!next) {
                next = currentSlide.parentElement.querySelector('.promo'); // first
            }

            next.classList.add('active-slide');/**/
            currentSlide.classList.remove('active-slide');

            setTimeout(() => {
            }, 500);
        });
    }, 5000);
})();
