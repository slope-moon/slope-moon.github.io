const thumbnails = document.querySelectorAll('.thumbnail');
const screen = document.getElementById('screen');


for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        screen.src = this.src;
    });
}

