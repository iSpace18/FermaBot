// Initialize counter with the value stored in localStorage or 0
let counter = localStorage.getItem('clickedCoins') ? parseInt(localStorage.getItem('clickedCoins')) : 0;
const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
document.documentElement.ondragstart = () => false;

// Update the counter element with the initial value
counterElement.innerHTML = `<img class="coin" src="images/owlcoin.png" alt="" /> ${counter}`;

clickButton.addEventListener('click', (event) => {
    counter++;
    counterElement.innerHTML = `<img class="coin" src="images/owlcoin.png" alt="" /> ${counter}`;
    localStorage.setItem('clickedCoins', counter); // Save the clicked coins to localStorage

    document.getElementById('clickButton').addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        this.style.transition = 'transform 0.1s';
      
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 500);
      });

    const animation = document.createElement('div');
    animation.classList.add('animation');
    animation.innerText = '1';
    document.body.appendChild(animation);
    animation.style.position = 'absolute';
    animation.style.left = event.clientX + 'px';
    animation.style.top = event.clientY + 'px';
    animation.style.animation = 'floatUp 1s forwards';
    animation.addEventListener('animationend', () => {
        document.body.removeChild(animation);
    });
});

// Retrieve the clicked coins from localStorage on page load
window.onload = function() {
    counter = localStorage.getItem('clickedCoins') ? parseInt(localStorage.getItem('clickedCoins')) : 0;
    counterElement.innerHTML = `<img class="coin" src="images/owlcoin.png" alt="" /> ${counter}`;
};

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Обновленная функция для покупки прокачки
function upgradeClick() {
    if (counter >= 50) {
        counter -= 50; // Списываем 50 кликов
        clickValue += 5; // Увеличиваем значение клика
        clickUpgradeLevel++; // Увеличиваем уровень прокачки
        updateCounter();
        updateLevel();
    } else {
        alert("Недостаточно кликов для покупки прокачки");
    }
}

// Функция для обновления счетчика
function updateCounter() {
    counterElement.innerHTML = `<img class="coin" src="images/owlcoin.png" alt="" /> ${counter}`;
}

// Обработчик клика на кнопку
clickButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});
window.onload = function() {
    updateLevel();
};