//your code here
document.querySelector('form').addEventListener('submit', function(event) {
  if (!event.target.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  event.target.classList.add('was-validated');
});