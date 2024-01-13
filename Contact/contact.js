emailjs.send('service_abcdefg', 'template_123', {
  name: 'James',
  notes: 'Hello!'  
})


emailjs.sendForm('service_abcdefg', 'template_123', document.getElementById('myForm'))


document.getElementById('contact-form').addEventListener('submit', function(event) {

  event.preventDefault();

  emailjs.sendForm('service_id', 'template_id', this)
    .then(function() {
      console.log('Email sent!')
    })
    .catch(function(err) {
      console.log('Error sending email', err)  
    });

});


// Send email API request
fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  body: JSON.stringify({
    service_id: 'service_abcdefg',
    template_id: 'template_123',
    user_id: 'YOUR_PUBLIC_KEY',
    template_params: {
      name: 'James'  
    }
  })
});


// On form submit
document.getElementById('myForm').addEventListener('submit', function(e) {

  e.preventDefault();
  
  // Send form data to EmailJS API
  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: new FormData(this) 
  });

});


emailjs.init('YOUR_PUBLIC_KEY'); 

// Handle form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {

  e.preventDefault();

  // Send form with EmailJS
  emailjs.sendForm('service_id', 'template_id', this)
    .then(function() {
      console.log('Email sent!');
    });

});