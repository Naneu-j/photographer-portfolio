function sendMessage(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thanks ${name}! Your message has been received. I will contact you shortly.`);
  document.getElementById('contact-form').reset();
}
