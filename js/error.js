document.getElementById('_signup_form').addEventListener('submit', function(event) {
    var inputs = document.querySelectorAll('.intgrtn-input');
    var valid = true;
  
    inputs.forEach(function(input) {
      if (!input.checkValidity()) {
        valid = false;
        input.nextElementSibling.style.display = 'block';
      } else {
        input.nextElementSibling.style.display = 'none';
      }
    });
  
    if (!valid) {
      event.preventDefault();
    }
  });
  