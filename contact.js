document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent form submission
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            try {
                const response = await fetch("http://localhost:3000/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, message }),
                });

                if (response.ok) {
                    successMessage.classList.remove("hidden");
                    successMessage.textContent = "Thank you for your message. We will get back to you soon!";
                    form.reset(); // Clear the form fields
                } else {
                    alert("Failed to send your message. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again later.");
            }
        } else {
            alert("Please fill out all fields.");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const slideshow = document.querySelector(".slideshow");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0; // Track the current slide index
    const totalSlides = slides.length;
    const slideDuration = 5000; // 5 seconds for each slide
    let autoSlideInterval;

    // Show the current slide
    function showSlide(index) {
        slideshow.style.transform = `translateX(-${index * 100}%)`;
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Start automatic slideshow
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideDuration);
    }

    // Stop automatic slideshow
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for buttons
    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Start the slideshow
    showSlide(currentIndex);
    startAutoSlide();
});