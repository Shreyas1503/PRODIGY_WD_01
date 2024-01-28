let divisions = document.querySelectorAll('div');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = div.offsetTop - 150;
        let height = div.offsetHeight;
        let id = div.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};