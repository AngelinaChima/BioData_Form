
const form = document.getElementById('biodataForm');
const photoInput = document.getElementById('photoInput');
const frame = document.getElementById('passportFrame');
const message = document.getElementById('message');
const preview = document.getElementById('preview');
const previewContent = document.getElementById('previewContent');

photoInput.addEventListener('change', function () {
  const file = photoInput.files[0];
  if (!file) return;
  if (!['image/jpeg','image/png','image/webp'].includes(file.type)) {
    message.textContent = 'Please select a JPG, PNG, or WEBP image.';
    photoInput.value = '';
    return;
  }
  const reader = new FileReader();
  reader.addEventListener('load', function () {
    frame.contentWindow.postMessage({type:'passport-photo',url:reader.result}, '*');
    message.textContent = 'Passport photograph preview updated.';
  });
  reader.readAsDataURL(file);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    message.textContent = 'Please complete all required fields with valid details.';
    form.reportValidity();
    preview.hidden = true;
    return;
  }
  message.textContent = 'Biodata is ready for preview.';
  previewContent.replaceChildren();
  const fields = [
    ['Full name','fullName'],['Matriculation number','matricNumber'],
    ['Date of birth','dob'],['Gender','gender'],['Email','email'],['Phone','phone'],
    ['State of origin','state'],['Nationality','nationality'],['Address','address'],
    ['Institution','institution'],['Programme','programme'],['Academic level','level'],['Department','department']
  ];
  fields.forEach(function (field) {
    const entry = document.createElement('div');
    const label = document.createElement('strong');
    const value = document.createElement('span');
    label.textContent = field[0];
    value.textContent = document.getElementById(field[1]).value.trim();
    entry.appendChild(label);
    entry.appendChild(value);
    previewContent.appendChild(entry);
  });
  preview.hidden = false;
  preview.scrollIntoView({behavior:'smooth',block:'start'});
});

form.addEventListener('reset', function () {
  preview.hidden = true;
  message.textContent = '';
  frame.src = 'passport.html';
});
