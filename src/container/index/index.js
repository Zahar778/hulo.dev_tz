class Slider {
    static #content = null;
    static #left = null;
    static #right = null;
    static #count = 0;
    static #max = null;
    static #videosPerPage = 4;

    static init = () => {
        this.#content = document.querySelector('.slider__content');
        this.#left = document.querySelector('.slider__button--left');
        this.#right = document.querySelector('.slider__button--right');
        this.#max = Math.ceil(this.#content.childElementCount / this.#videosPerPage);

        this.#left.onclick = () => this.#slide('left');
        this.#right.onclick = () => this.#slide('right');

        const openPopups = document.querySelectorAll('.open-popup');
        openPopups.forEach(popup => {
            popup.addEventListener('click', () => {
                const videoId = popup.parentElement.getAttribute('data-video-id');
                Slider.openPopup(videoId);
            });
        });
    };

    static #slide = (direction) => {
        const offsetWidth = this.#content.offsetWidth;
        const totalVideos = this.#content.childElementCount;

        if (direction === 'left') {
            this.#count = (this.#count - 1 + this.#max) % this.#max;
        } else if (direction === 'right') {
            this.#count = (this.#count + 1) % this.#max;
        }

        const startPosition = this.#count * this.#videosPerPage;
        const endPosition = Math.min(startPosition + this.#videosPerPage, totalVideos);

        const scroll = startPosition * offsetWidth;

        this.#content.scrollTo({
            top: 0,
            left: scroll,
            behavior: 'smooth',
        });
    };
}

Slider.init();


let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 


openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});