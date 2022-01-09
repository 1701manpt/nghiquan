function createImageZoom(options) {
    const current = document.querySelector(options.current)
    const thumbnails = document.querySelectorAll(options.thumbnails)
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', e => {
            const thumbnailActive = document.querySelector(options.thumbnail)
            thumbnailActive.classList.remove("-active")
            const childCurrent = current.querySelector("img") || current.querySelector("video")
            const childActive = thumbnail.querySelector("img") || thumbnail.querySelector("video")
            thumbnail.classList.add("-active")
            console.log(childCurrent, childActive)
            // if (childCurrent == childActive) {
                current.replaceChild(childActive, childCurrent)
            // }
        })
    })
}

window.onload = () => {
    createImageZoom({
        current: ".current",
        thumbnails: ".map__item",
        thumbnail: ".map__item.-active",
    })
}