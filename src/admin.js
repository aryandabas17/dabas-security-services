/* AUTH CHECK */

const isLoggedIn = localStorage.getItem(
  'adminLoggedIn'
);

if (!isLoggedIn) {

  window.location.href = '/login.html';

}

/* FETCH INQUIRIES */

async function fetchInquiries() {

  try {

    const response = await fetch(
      'https://dabas-security-services.onrender.com'
    );

    const inquiries = await response.json();

    const container = document.getElementById(
      'inquiriesContainer'
    );

    container.innerHTML = '';

    inquiries.forEach((inquiry) => {

      container.innerHTML += `

        <div class="inquiry-card">

          <h3>${inquiry.fullName}</h3>

          <div class="inquiry-item">
            <span class="inquiry-label">
              Email:
            </span>
            ${inquiry.email}
          </div>

          <div class="inquiry-item">
            <span class="inquiry-label">
              Phone:
            </span>
            ${inquiry.phone}
          </div>

          <div class="inquiry-item">
            <span class="inquiry-label">
              Service:
            </span>
            ${inquiry.service}
          </div>

          <div class="inquiry-item">
            <span class="inquiry-label">
              Message:
            </span>
            ${inquiry.message}
          </div>

        </div>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}

fetchInquiries();

/* LOGOUT */

const logoutBtn = document.getElementById(
  'logoutBtn'
);

logoutBtn.addEventListener('click', () => {

  localStorage.removeItem(
    'adminLoggedIn'
  );

  window.location.href = '/login.html';

});

sr.reveal('.gallery-item', {

  interval: 150,
  origin: 'bottom'

});