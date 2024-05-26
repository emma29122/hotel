function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
    this.reset();
});

// Image modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
