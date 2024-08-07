function showPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000); // El popup se mostrará durante 5 segundos
}

// Llama a esta función cuando quieras mostrar el popup
showPopup();
