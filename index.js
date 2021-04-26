// Modal
const showModal = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("modal-close-btn");

showModal.addEventListener("click", () => {
    modal.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})