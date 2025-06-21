function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.cssText = `
        position: fixed;
        font-size: 20px;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        opacity: 1;
        transform: translateY(0);
        animation: floatHeart 5s linear;
    `;
    heart.innerHTML = '❤️';
    document.querySelector('.floating-hearts').appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove());
}

setInterval(createHeart, 300);

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            to {
                transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }
        .floating-heart {
            pointer-events: none;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
});