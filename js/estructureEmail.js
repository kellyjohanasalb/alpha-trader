document.addEventListener('DOMContentLoaded', () => {
    class EmailDomainSuggester {
        constructor(domains, inputSelector) {
            this.domains = domains;
            this.input = document.querySelector(inputSelector);
            this.datalist = null;

            if (this.input) {
                this.init();
            }
        }

        init() {
            this.createDatalist();
            this.bindEvents();
        }

        createDatalist() {
            // Create empty datalist
            this.datalist = document.createElement('datalist');
            this.datalist.id = 'email-options';
            this.input.setAttribute('list', 'email-options');
            this.input.parentNode.insertBefore(this.datalist, this.input.nextSibling);
        }

        bindEvents() {
            this.input.addEventListener('keyup', (event) => this.testValue(event));
        }

        testValue(event) {
            const value = event.target.value;

            // Check if email contains @
            if (value.includes("@")) {
                const prefix = value.split("@")[0];
                this.populateDatalist(prefix);
            } else {
                // Empty list
                this.datalist.innerHTML = '';
            }
        }

        populateDatalist(prefix) {
            const options = this.domains.map(domain => `<option value="${prefix}@${domain}">`).join('');
            this.datalist.innerHTML = options;
        }
    }

    const domains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com.mx", "live.com.mx", "icloud.com", "yahoo.com", "outlook.es", "live.com", "hotmail.es", "mail.com", "msn.com", "hotmail.com.mx", "prodigy.net.mx", "yahoo.es", "email.com"];
    new EmailDomainSuggester(domains, '#email');
});
