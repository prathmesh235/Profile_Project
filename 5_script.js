function changeAboutMeText() {
    const aboutMeTexts = [
        "BCA (Science) Student",
        "Full Stack Web Developer",
        "Good Programmer"
    ];

    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;

    const aboutMeElement = document.querySelector(".about-me");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting) {
            aboutMeElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex < currentText.length) {
                setTimeout(type, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(type, pauseTime);
            }
        } else {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex > 0) {
                setTimeout(type, eraseSpeed);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % aboutMeTexts.length;
                charIndex = 0;
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
}

window.onload = changeAboutMeText;

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});