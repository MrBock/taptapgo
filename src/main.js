const body = document.body;
body.addEventListener('keydown', function(e) {
  if (e.keyCode === 32) {
    body.classList.toggle('is-inverted');
  }
});
