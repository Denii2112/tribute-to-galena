document.addEventListener('DOMContentLoaded', () => {  
    const slides = document.querySelectorAll('.slide');  
    let currentSlide = 0;  
    
    // Показва първия слайд  
    showSlide(currentSlide);  

    function showSlide(index) {  
        slides.forEach((slide, i) => {  
            slide.classList.remove('active');  
            if (i === index) {  
                slide.classList.add('active');  
            }  
        });  
    }  

    window.changeSlide = function(n) {  
        currentSlide += n;  
        if (currentSlide < 0) {  
            currentSlide = slides.length - 1;  
        } else if (currentSlide >= slides.length) {  
            currentSlide = 0;  
        }  
        showSlide(currentSlide);  
    };  
    
    const form = document.getElementById('contact-form');  
    form.addEventListener('submit', function(event) {  
        event.preventDefault(); // Спира формата да се изпрати  
        alert('Вашето съобщение е изпратено успешно!');  
        form.reset(); // Нулира формата  
    });  
});