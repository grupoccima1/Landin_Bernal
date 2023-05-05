const card = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; 

indicators.forEach((item, i) => {
    item.addEventListener('click', () =>{
        indicators[currentTestimonial].classList.reemove('active');
        card.style.marginLefts= `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;

    })
})
 