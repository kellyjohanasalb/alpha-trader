// showModals.js

const showModalBasedOnUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('e')) {
        const modalNumber = urlParams.get('e');
        const modalElement = document.getElementById(`mod${modalNumber}`);
        if (modalElement) {
            modalElement.style.display = "block";
        }
    }
};

document.addEventListener('DOMContentLoaded', showModalBasedOnUrl);
