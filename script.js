const slides = document.querySelector('.slide img');

let url = "mmc1.jpg";

function changeimg() {
    if (url === "mmc1.jpg") {
        slides.src = "mmc2.jpg";
        url = "mmc2.jpg";
    } else {
        slides.src = "mmc1.jpg";
        url = "mmc1.jpg";
    }

    // Create a keyframes animation
    slides.animate([
        { transform: 'scale(1)', opacity: 1 },   // Initial state
        { transform: 'scale(1.4)', opacity: 1, offset: 0.5 }, // Middle state at 50%
        { transform: 'scale(1)', opacity: 1 }    // Final state
    ], {
        duration: 7000,   // Duration in milliseconds
        easing: 'ease-in-out'
    });
}
changeimg();

setInterval(changeimg, 7000); // Set interval to 4 seconds

let slidebtn = document.querySelectorAll(".slidebtn");
slidebtn.forEach(slide => {
    slide.addEventListener("click", () => {
        if (url === "mmc1.jpg") {
            slides.src = "mmc2.jpg";
            url = "mmc2.jpg";
        } else {
            slides.src = "mmc1.jpg";
            url = "mmc1.jpg";
        }

        // Create a keyframes animation
        slides.animate([
            { transform: 'scale(1)', opacity: 1 },   // Initial state
            { transform: 'scale(1.4)', opacity: 1, offset: 0.5 }, // Middle state at 50%
            { transform: 'scale(1)', opacity: 1 }    // Final state
        ], {
            duration: 7000,   // Duration in milliseconds
            easing: 'ease-in-out'
        });
    });
});
