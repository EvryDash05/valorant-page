document.addEventListener('DOMContentLoaded', function () {
    const beforeBtn = document.getElementById('before');
    const nextBtn = document.getElementById('next');
    const testimonies = document.querySelectorAll('.testimony__body');
    let currentIndex = 0;

    function showTestimony(index) {
        testimonies.forEach((testimony, i) => {
            testimony.classList.remove('testimony__body--show');
            if (i === index) {
                testimony.classList.add('testimony__body--show');
            }
        });
    }

    beforeBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? testimonies.length - 1 : currentIndex - 1;
        showTestimony(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex === testimonies.length - 1) ? 0 : currentIndex + 1;
        showTestimony(currentIndex);
    });
});
