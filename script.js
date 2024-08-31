let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth;
    
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    
    const newTransformValue = -currentIndex * (itemWidth - 40) + 'px'; // Adjust for peek effect
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue})`;
}