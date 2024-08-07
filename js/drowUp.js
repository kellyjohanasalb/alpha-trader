document.addEventListener('DOMContentLoaded', function() {
  const countries = [
      { name: "Costa Rica", code: "cr", dialCode: "+506" },
      { name: "Afghanistan", code: "af", dialCode: "+93" },
      { name: "United States", code: "us", dialCode: "+1" },
      // Add more countries as needed
  ];

  const dropdown = document.querySelector('.iti__selected-country');
  const countryList = document.querySelector('.iti__country-list');
  const searchInput = document.querySelector('.iti__search-input');

  // Populate the country list
  countries.forEach(country => {
      const li = document.createElement('li');
      li.className = 'iti__country iti__standard';
      li.setAttribute('data-country-code', country.code);
      li.setAttribute('data-dial-code', country.dialCode);
      li.innerHTML = `
          <div class="iti__flag-box">
              <div class="iti__flag iti__${country.code}"></div>
          </div>
          <span class="iti__country-name">${country.name}</span>
          <span class="iti__dial-code">${country.dialCode}</span>
      `;
      countryList.appendChild(li);
  });

  // Toggle dropdown
  dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
      countryList.classList.toggle('iti__hide');
      dropdown.setAttribute('aria-expanded', countryList.classList.contains('iti__hide') ? 'false' : 'true');
  });

  // Select country
  countryList.addEventListener('click', function(e) {
      const country = e.target.closest('li');
      if (country) {
          const code = country.getAttribute('data-country-code');
          const dialCode = country.getAttribute('data-dial-code');
          
          dropdown.querySelector('.iti__flag').className = `iti__flag iti__${code}`;
          dropdown.querySelector('.iti__selected-dial-code').textContent = dialCode;
          
          countryList.classList.add('iti__hide');
          dropdown.setAttribute('aria-expanded', 'false');
      }
  });

  // Search functionality
  searchInput.addEventListener('input', function() {
      const filter = this.value.toLowerCase();
      const listItems = countryList.getElementsByTagName('li');
      
      for (let i = 0; i < listItems.length; i++) {
          const countryName = listItems[i].textContent || listItems[i].innerText;
          if (countryName.toLowerCase().indexOf(filter) > -1) {
              listItems[i].style.display = "";
          } else {
              listItems[i].style.display = "none";
          }
      }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
      countryList.classList.add('iti__hide');
      dropdown.setAttribute('aria-expanded', 'false');
  });
});