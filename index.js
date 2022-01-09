import { createImageZoom, createOffCanvas } from "./js/modules/"
window.onload = () => {
    createOffCanvas({
        backdrop: ".backdrop",
        container: ".offcanvas",
        closeBtn1: ".offcanvas__header--close",
        closeBtn2: ".offcanvas__footer--button.-close",
        openBtn: ".header__cart.-open",
    })
    createImageZoom({
        current: ".current>img",
        thumbnails: ".map__item",
        thumbnail: ".map__item.-active",
    })
}