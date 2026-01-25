const gallery = document.querySelectorAll('.photo-box img');
const popup = document.getElementById('photoPopup');
const popupImg = document.getElementById('popupImg');
const popupDate = document.getElementById('popupDate');

gallery.forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImg.src = img.src;
        popupDate.textContent = img.parentElement.querySelector('.photo-date').textContent;
    });
});

function closePopup() {
    popup.style.display = 'none';
}
