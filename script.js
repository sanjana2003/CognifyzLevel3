// JavaScript for redirection on "Apply Now" button click
const applyButton = document.querySelector('.btn');

applyButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = applyButton.getAttribute('href');
});
