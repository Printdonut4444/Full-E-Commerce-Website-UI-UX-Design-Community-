// ฟังก์ชันเลื่อนไปทางซ้ายหรือขวา
function slide(direction) {
    const slider = document.querySelector('.product-slider');
    const scrollAmount = 300; // ระยะการเลื่อนต่อการกด 1 ครั้ง
    
    if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}