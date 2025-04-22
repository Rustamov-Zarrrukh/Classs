let form = document.getElementById('mainForm');
let inputs = form.querySelectorAll('input, select');
let counter = document.getElementById('counter');

function updateCounter() {
  let filled = 0;
  inputs.forEach(i => {
    if (i.type !== "checkbox" && i.type !== "file" && i.value.trim() !== "") filled++;
  });
  counter.textContent = `Total: 15 | Filled: ${filled} | Left: ${15 - filled}`;
}

inputs.forEach(i => i.addEventListener('input', updateCounter));

let imgUpload = document.getElementById('imgUpload');
let preview = document.getElementById('preview');

imgUpload.addEventListener('change', function () {
  let file = this.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Form submitted!");
});

updateCounter(); // initial count
