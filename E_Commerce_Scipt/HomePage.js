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

window.onload = function () {
    const btt = document.getElementById("backToTop");

    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btt.style.display = "block";
        } else {
            btt.style.display = "none";
        }
    };
    btt.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}