'use strict';

import '../scss/app.scss';

(() => {
    setInterval(() => {
        let sliders = document.querySelectorAll('.slider');

        sliders.forEach(() => {
            let currentSlide = document.querySelector('.active-slide'),
                next = currentSlide.nextElementSibling;

            if (!next) {
                next = currentSlide.parentElement.querySelector('.promo');/* first */
            }

            next.classList.add('active-slide');
            currentSlide.classList.remove('active-slide');
        });
    }, 5000);
})();

const modalButtons = document.querySelectorAll('[data-toggle="modal"]'),
    dismissButtons = document.querySelectorAll('[data-dismiss]'),
    modalWrapper = document.getElementById('modals-wrapper'),
    checkModalIn = () => {
        if (!document.querySelectorAll('.modal.in').length) {
            modalWrapper.classList.remove('in')
        } else if (!modalWrapper.classList.contains('in')) {
            modalWrapper.classList.add('in');
        }
    };

modalWrapper.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
        document.querySelectorAll('.modal.in').forEach(modal => {
            modal.classList.remove('in');
        });
        modalWrapper.classList.remove('in')
    }
});

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        let currentModal = document.getElementById(button.dataset.target);

        if (currentModal.classList.contains('in')) {
            currentModal.classList.remove('in');
        } else {
            currentModal.classList.add('in');
        }

        checkModalIn();
    });
});

dismissButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        btn.closest('.' + btn.dataset.dismiss).classList.remove('in');

        checkModalIn();
    });
});
