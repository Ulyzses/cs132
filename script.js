function toggleTheme() {
    const link = document.getElementById('theme');

    if (link.getAttribute('href') == 'styles/styles.css') {
        link.setAttribute('href', 'styles/meme.css');
    } else {
        link.setAttribute('href', 'styles/styles.css');
    }
}


Array.from(document.getElementsByClassName('intro-letter'))
    .forEach((elem) => {
        const letter = elem.id.split('-')[1];
        const member = document.getElementById(`member-${letter}`);

        elem.addEventListener('mouseenter', (e) => {
            member.classList.add('grow');
        })
        
        elem.addEventListener('mouseleave', (e) => {
            member.classList.remove('grow');
        })
    })