document.addEventListener('DOMContentLoaded', function() {

  const cbx = document.getElementById('cbx');
  cbx.addEventListener('change', function() {
    document.body.classList.toggle('dark')
  });
});