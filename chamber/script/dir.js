// Get reference to DOM elements
const membersContainer = document.getElementById('members'); // Container where member cards will be displayed
const gridBtn = document.getElementById('gridBtn');           // Button to activate Grid View
const listBtn = document.getElementById('listBtn');           // Button to activate List View

// === EVENT HANDLERS FOR VIEW TOGGLING ===
// When Grid View button is clicked, apply 'grid-view' class and remove 'list-view'
gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid-view');
  membersContainer.classList.remove('list-view');
});

// When List View button is clicked, apply 'list-view' class and remove 'grid-view'
listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
});

// === FETCH MEMBER DATA FROM JSON FILE ===
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json'); // Fetch the members.json file from the "data" folder
    const members = await response.json();             // Parse the JSON data into a JavaScript object/array
    displayMembers(members);                           // Call function to display the members on the page
  } catch (error) {
    console.error('Failed to load member data', error); // Show an error in the console if fetch fails
  }
}

// === DISPLAY EACH MEMBER AS A CARD ON THE PAGE ===
function displayMembers(members) {
  membersContainer.innerHTML = ''; // Clear the container before adding new cards

  members.forEach(member => {
    const card = document.createElement('div'); // Create a new <div> for the member
    card.classList.add('member-card');          // Add styling class

    // Fill in the card with member information using innerHTML
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" onerror="this.src='images/default.png';">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
    `;

    membersContainer.appendChild(card); // Add the card to the container
  });
}

// === CONVERT MEMBERSHIP LEVEL FROM NUMBER TO TEXT ===
function getMembershipLevel(level) {
  // Translate numeric level to text
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

// === INITIALIZE SCRIPT ON PAGE LOAD ===
fetchMembers(); // Load and display members when the page loads
