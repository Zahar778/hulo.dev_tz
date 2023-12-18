class Slider {
    static #content = null
    static #left = null
    static #right = null

    static #count = 1
    static #max = null

    static init = () => {
        this.#content = document.querySelector(
            '.slider__content'
        )
        this.#left = document.querySelector(
            '.slider__button--left'
        )
        this.#right = document.querySelector(
            '.slider__button--right'
        )

        this.#max = this.#content.childElementCount

        this.#left.onclick = () => this.#slide('left')
        this.#right.onclick = () => this.#slide('right')
    }

    static #slide = (slide) => {
        const offsetWidth = this.#content.offsetWidth
        const scrollLeft = this.#content.scrollLeft
        const scrollWidth = this.#content.scrollWidth

        let scroll = 0

        if(side === 'left') {
            if(this.#count === 1 || scrollLeft === 0) {
                this.#count = this.#max
                scroll = (this.#count - 1) * offsetWidth
            }else {
                this.#content -= 1
                scroll = (this.#count - 1) * offsetWidth
            }
        }
        if(side === 'right') {
            if(this.#count === scrollWidth - offsetWidth) {
                this.#count = 1
                scroll = 0
            } else {
                this.#count += 1
                scroll = (this.#count - 1) * offsetWidth
            }
        }

        this.#content.scrollTo({
            top: 0,
            left: scroll,
            behavior: 'smooth',
        })
    }
}
Slider.init()

class Header {
    static #heigth = null
    static #wrapper = null
    static #button = null

    static #isOpen = falce

    static init() {
        this.#heigth = document.querySelector(
            '.header__bottom',
        ).offsetHeight

        this.#wrapper = document.querySelector(
            '.header__wrapper',
        )
        this.#button = document.querySelector('.header__button')

        this.#button.onclick = this.#toggle
    }

    static #toggle = () => {
        if(this.#isOpen) {
            this.#button.classList.replace(
                '.header__button--close',
                '.header__button--open',
            )
            this.#wrapper.style.height = 0
        }else {
            this.#button.classList.replace(
                '.header__button--open',
                '.header__button--close',
            )
            this.#wrapper.style.height = `${this.#heigth}px`
        }
        this.#isOpen = !this.#isOpen
    }
}

Header.init()