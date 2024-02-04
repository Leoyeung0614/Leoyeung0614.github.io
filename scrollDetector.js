const sections = document.querySelectorAll('section')
const navList = document.querySelectorAll('a.progress-link');
console.log(navList.length);
window.addEventListener('scroll', () => {   
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id')
        }
    })
    // console.log(current);
    navList.forEach(a => {
        a.classList.remove('selected');
        if(a.classList.contains(current)) {
            a.classList.add('selected');
        }
    })
})