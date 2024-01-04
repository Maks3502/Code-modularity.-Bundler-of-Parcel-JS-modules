
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  showSuccessMessage();
});

function showSuccessMessage() {
  
  alert('Ваше повідомлення відправлено!');
}