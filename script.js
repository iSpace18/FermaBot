let counter = 0;
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

document.documentElement.ondragstart = () => false;

clickButton.addEventListener('click', (event) => {
    counter++;
    counterElement.innerHTML = `<img class="coin" src="images/Coin-PNG-Picture.png" alt="" /> ${counter}`;
    
    const animation = document.createElement('div');
    animation.classList.add('animation');
    animation.innerText = '+1';
    document.body.appendChild(animation);
    
    animation.style.position = 'absolute';
    animation.style.left = event.clientX + 'px';
    animation.style.top = event.clientY + 'px';
    
    animation.style.animation = 'floatUp 1s forwards';
    
    animation.addEventListener('animationend', () => {
        document.body.removeChild(animation);
    });
});