// script.js
document.getElementById('seniorForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value.trim();
    const condition = document.getElementById('condition').value.trim();
    const fileInput = document.getElementById('file');
  
    if (age < 60) {
      alert('Only individuals aged 60 and above can register.');
      return;
    }
  
    const reader = new FileReader();
    const file = fileInput.files[0];
  
    reader.onload = function () {
      const fileURL = file ? reader.result : '';
  
      const newSenior = {
        name,
        age,
        gender,
        address,
        condition,
        file: fileURL
      };
  
      const seniors = JSON.parse(localStorage.getItem('seniors') || '[]');
      seniors.push(newSenior);
      localStorage.setItem('seniors', JSON.stringify(seniors));
  
      alert('Senior registered successfully!');
      document.getElementById('seniorForm').reset();
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      reader.onload();
    }
  });
  