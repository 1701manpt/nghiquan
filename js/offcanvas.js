export default function offcanvasCreate(options) {
    const backdrop = document.querySelector(options.backdrop)
    const container = document.querySelector(options.container)
    const openBtn = document.querySelector(options.openBtn)
    const closeBtn1 = container.querySelector(options.closeBtn1)
    const closeBtn2 = container.querySelector(options.closeBtn2)
    const closeBtn = [closeBtn1, closeBtn2]

    openBtn.addEventListener("click", () => {
        backdrop.classList.add("-active")
        container.classList.add("-active")
    })

    closeBtn.forEach(e => {
        e.addEventListener("click", () => {
            backdrop.classList.remove("-active")
            container.classList.remove("-active")
        })
    })
}