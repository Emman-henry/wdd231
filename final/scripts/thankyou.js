document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  let detailsHTML = `
    <p><strong>First Name:</strong> ${params.get('firstName') || ''}</p>
    <p><strong>Last Name:</strong> ${params.get('lastName') || ''}</p>
    <p><strong>Title / Position:</strong> ${params.get('orgTitle') || ''}</p>
    <p><strong>Email:</strong> ${params.get('email') || ''}</p>
    <p><strong>Phone:</strong> ${params.get('phone') || ''}</p>
    <p><strong>Business Name:</strong> ${params.get('organization') || ''}</p>
    <p><strong>Membership Level:</strong> ${params.get('membership') || ''}</p>
    <p><strong>Description:</strong> ${params.get('description') || ''}</p>
    <p><strong>Timestamp:</strong> ${params.get('timestamp') || ''}</p>
  `;

  document.getElementById('submitted-details').innerHTML = detailsHTML;
});
