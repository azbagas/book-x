const container = document.querySelector('.container');

const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav a');

const bgColor = {'book-01': '#ffffff',
                 'book-02': '#622e6d', 
                 'book-03': '#4d74b3',
                 'book-04': '#ffffff', 
                 'book-05': '#ea4e1d', 
                 'book-06': '#febc10', 
                 'book-07': '#f7d99d', 
                };

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 380;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if ((top >= offset) && (top < (offset + height))) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
            container.style.backgroundColor = bgColor[id];
        }
    })
};