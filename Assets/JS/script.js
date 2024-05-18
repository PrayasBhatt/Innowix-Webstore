document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', function() {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });

    increaseBtn.addEventListener('click', function() {
        quantityInput.value++;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    let currentIndex = 0;

    function updateSwiperPosition() {
        swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSwiperPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSwiperPosition();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-button');
    const totalRatingsElement = document.querySelector('.total-ratings');
    const ratingBars = document.querySelectorAll('.rating-bar');

    let ratings = JSON.parse(localStorage.getItem('ratings')) || {
        5: 1,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    };
    let totalRatings = parseInt(localStorage.getItem('totalRatings')) || 1;

    function updateRatingDisplay() {
        ratingBars.forEach(bar => {
            const rating = bar.getAttribute('data-rating');
            const count = ratings[rating];
            const percentage = (count / totalRatings) * 100;
            bar.querySelector('.fill').style.width = `${percentage}%`;
            bar.querySelector('.count').textContent = count;
        });
        const averageRating = (5 * ratings[5] + 4 * ratings[4] + 3 * ratings[3] + 2 * ratings[2] + ratings[1]) / totalRatings;
        document.querySelector('.rating-value').textContent = averageRating.toFixed(1);
        totalRatingsElement.textContent = `${totalRatings} ratings`;
        localStorage.setItem('ratings', JSON.stringify(ratings));
        localStorage.setItem('totalRatings', totalRatings.toString());
    }

    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratings[rating]++;
            totalRatings++;
            updateRatingDisplay();
        });
    });

    updateRatingDisplay();
});

