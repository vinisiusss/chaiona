const openBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")
const myModal = document.getElementById("my-modal")

openBtn.addEventListener("click", function() {
    myModal.classList.add("open")
})

closeBtn.addEventListener("click", function() {
    myModal.classList.remove("open")
})

     