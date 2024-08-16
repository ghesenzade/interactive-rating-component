let ratingButtons = document.querySelectorAll('.rating-btn');
let selectedRating = null;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedRating = button.textContent;
    });
});

document.getElementById('submit').addEventListener('click', () => {
    if (selectedRating) {
        window.location.href = `thanks.html?rating=${selectedRating}`;
    } else {
        alert('Please select a rating');
    }
});
