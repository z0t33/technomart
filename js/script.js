addEvents();

function addEvents() {
    var buttonWriteUs = document.querySelector('.show-form');
    var closeForm = document.querySelector('.close-popup');

    buttonWriteUs.addEventListener('click', function(event) {
      event.preventDefault();
      toggleElement();
    })
    closeForm.addEventListener('click', function(event) {
      event.preventDefault();
      toggleElement();
    })
}
function toggleElement() {
  var formWriteUs = document.querySelector('.popup-form');
  formWriteUs.classList.toggle('show-popup');
}
