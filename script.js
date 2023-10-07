

function loginPage() {
  const email = document.querySelector('#email').value;

  // Validate the email address
  if (!validateEmail(email)) {
    document.querySelector('.error_text').style.display = 'block';
    return;
  }

  // Display the success page
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('success-page').style.display = 'flex';
  document.getElementById('entered-email').textContent = email;
}

function closeSuccessPage() {
  document.getElementById('login-form').style.display = 'flex';
  document.getElementById('success-page').style.display = 'none';

}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


