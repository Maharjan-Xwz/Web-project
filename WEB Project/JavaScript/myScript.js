
//----------------contact-----------------//
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
        formMessage.className = 'message success';
        formMessage.style.display = 'block';

        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = 'Please fill out all fields before submitting.';
        formMessage.className = 'message error';
        formMessage.style.display = 'block';
    }
});