const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const username = document.getElementById('username').value;

  const password = document.getElementById('password').value;

  /* SIMPLE AUTH */

  if (
    username === 'admin'
    &&
    password === 'dabas123'
  ) {

    localStorage.setItem(
      'adminLoggedIn',
      'true'
    );

    window.location.href = '/admin.html';

  } else {

    alert('Invalid Credentials');

  }

});