document.addEventListener('DOMContentLoaded', function() {
    const hoverWord = document.querySelector('.hover-word');
    const popupBox = document.getElementById('popup-box');
    const popupIframe = document.getElementById('popup-iframe');

    function showPopup(event) {
        popupIframe.src = 'https://www.nhm.ac.uk/discover/megalodon--the-truth-about-the-largest-shark-that-ever-lived.html'; // URL of the website to display
        popupBox.style.display = 'block';
        popupBox.style.left = event.pageX + 'px';
        popupBox.style.top = event.pageY + 'px';
    }

    function hidePopup() {
        popupBox.style.display = 'none';
        popupIframe.src = '';
    }

    hoverWord.addEventListener('mouseover', showPopup);
    hoverWord.addEventListener('mouseout', hidePopup);
    hoverWord.addEventListener('click', showPopup);
});