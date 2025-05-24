
function openModal(type) {
  document.getElementById('modal-' + type).style.display = 'block';
}

function closeModal(type) {
  document.getElementById('modal-' + type).style.display = 'none';
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}
