document.addEventListener('DOMContentLoaded', function() {
    const text = "I'm Md. Imdadul Haque Somik, on a thrilling journey as a problem-solving enthusiast!";
    let index = 0;
    const speed = 50; // Typing speed in milliseconds

    function typeEffect() {
        if (index < text.length) {
            document.getElementById('typing-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});
