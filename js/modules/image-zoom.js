export default function createImageZoom(options) {
    const current = document.querySelector(options.current)
    const thumbnails = document.querySelectorAll(options.thumbnails)
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', e => {
            const thumbnailActive = document.querySelector(options.thumbnail)
            thumbnailActive.classList.remove("-active")
            thumbnail.classList.add("-active")
            current.src = thumbnail.querySelector("img").src
        })
    })
}