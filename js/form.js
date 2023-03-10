// Select the form and the submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('.btn-send-message');

// Listen for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input values
    const name = form.querySelector('input[name="Name"]').value;
    const email = form.querySelector('input[name="Email"]').value;
    const subject = form.querySelector('input[name="Subject"]').value;
    const message = form.querySelector('textarea[name="Message"]').value;

    // Construct the email body
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Create a mailto URL with the email subject and body
    const mailtoUrl = `mailto:loiwai700@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Set the form action to the mailto URL
    form.action = mailtoUrl;

    // Submit the form
    form.submit();

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
});
