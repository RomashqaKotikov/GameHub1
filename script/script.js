const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    alert('Будет сделано позже');
});
const primaryBtn = document.getElementById('primary-btn');
primaryBtn.addEventListener('click', () => {
    alert('Будет сделано позже');
});
const secondaryBtn = document.getElementById('secondary-btn');
secondaryBtn.addEventListener('click', function(){
    alert('Будет сделано позже');
});

const addToCartBtn1 = document.getElementById('add-to-cart1');
addToCartBtn1.addEventListener('click', function(){
    alert('Игра добавлена в корзину');
});
const addToCartBtn2 = document.getElementById('add-to-cart2');
addToCartBtn2.addEventListener('click', function(){
    alert('Игра добавлена в корзину');
});
const addToCartBtn3 = document.getElementById('add-to-cart3');
addToCartBtn3.addEventListener('click', function(){
    alert('Игра добавлена в корзину');
});
const addToCartBtn4 = document.getElementById('add-to-cart4');
addToCartBtn4.addEventListener('click', function(){
    alert('Игра добавлена в корзину');
});
const dealBtn = document.getElementById('deal-btn');
dealBtn.addEventListener('click', function(){
    alert('Войдите в аккаунт!');
});

const dealBtn1 = document.getElementById('dealBtn1');
dealBtn1.addEventListener('click', function(){
    alert('Войдите в аккаунт!');
});

const dealBtn2 = document.getElementById('dealBtn2');
dealBtn2.addEventListener('click', function(){
    alert("Войдите в аккаунт!");
});

const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // In a real app, you would send this to your server
        console.log('Subscribed with email:', email);
        
        // Show success message
        alert('Спасибо за подписку! Вы будете получать наши новости и специальные предложения.');
        this.reset();
    });


// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Показать/скрыть кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Плавная прокрутка при клике
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Вариант 1: Плавная прокрутка с поведением 'smooth'
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Вариант 2: Кастомная анимация прокрутки (если нужно больше контроля)
        // smoothScrollToTop();
    });
    
    // Альтернативная реализация плавной прокрутки (если вариант 1 не поддерживается)
    function smoothScrollToTop() {
        const startPosition = window.pageYOffset;
        const targetPosition = 0;
        const distance = targetPosition - startPosition;
        const duration = 500; // в миллисекундах
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        // Функция для плавности (easing function)
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
}

// Инициализация кнопки "Наверх"
initBackToTop();