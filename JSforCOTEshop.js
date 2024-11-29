const form = document.getElementById("form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    form.style.display = "none";
    
    const thankYouMessage = document.createElement('h5');
    thankYouMessage.textContent = 'Thank you for your submission';
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginTop = '20px';
    form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
    
    try {
        const response = await fetch('https://formspree.io/f/mzzbvekk', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Form submitted successfully:', data);
    } catch (error) {
        console.error('Error:', error);
        thankYouMessage.textContent = 'There was an error submitting your form. Please try again later.';
        thankYouMessage.style.color = 'red';
    }
});
