function rain() {
    let amount = 40;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        let size = Math.random() * 3;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = -10 + posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 0.5 + 's';
        body.appendChild(drop);
        i++;
    }
}

rain();