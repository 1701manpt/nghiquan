export default function modal(modal) {
    const modalBackdrop = document.querySelector(modal + ".modal-backdrop")
    const modalContainer = document.querySelector(modal + ".modal-container")
    const modalOpen = document.querySelector(modal + ".modal-open")
    const modalClose1 = modalContainer.querySelector(".modal-header-close")
    const modalClose2 = modalContainer.querySelector(".modal-footer-close")
    const modalClose = [modalClose1, modalClose2]
    console.log(modal, modalBackdrop, modalContainer, modalOpen, modalClose1, modalClose2, modalClose)

    modalOpen.addEventListener("click", () => {
        modalBackdrop.classList.add("modal-backdrop-active")
        modalContainer.classList.add("modal-container-active")
    })

    modalClose.forEach(e => {
        e.addEventListener("click", () => {
            modalBackdrop.classList.remove("modal-backdrop-active")
            modalContainer.classList.remove("modal-container-active")
        })
    })
}