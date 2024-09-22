document.addEventListener('DOMContentLoaded', function() {
    // Simple example: Change header color on click
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});