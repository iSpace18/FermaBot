let counter = 0;
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    counter++;
    counterElement.innerText = counter;


    const animation = document.createElement('div');
    animation.classList.add('animation');
    animation.innerText = '+1';
    document.body.appendChild(animation);

    setTimeout(() => {
        document.body.removeChild(animation);
    }, 1000);
});