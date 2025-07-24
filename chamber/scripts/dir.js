// === DOM Elements ===
const membersContainer = document.getElementById('members'); // For the main directory
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const topMemberSection = document.getElementById("Top-members"); // Optional: only exists on some pages

// === VIEW TOGGLING ===
if (gridBtn && listBtn && membersContainer) {
  gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
  });

  listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
  });
}

// === FETCH MEMBERS JSON ===
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    if (membersContainer) {
      displayMembers(members); // Render full directory if container exists
    }

    if (topMemberSection) {
      displayTopMembers(members); // Render top members if section exists
    }

  } catch (error) {
    console.error('Failed to load member data', error);
  }
}

// === RENDER ALL MEMBERS (for full directory) ===
function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach(member => {
    const card = createMemberCard(member);
    membersContainer.appendChild(card);
  });
}

// === RENDER TOP 3 GOLD MEMBERS ===
function displayTopMembers(members) {
  const topMembers = members.filter(m => m.membership === 3).slice(0, 3);
  if (topMembers.length === 0) {
    topMemberSection.innerHTML = "<p>No Gold Members available at the moment.</p>";
    return;
  }

  topMemberSection.innerHTML = '';
  topMembers.forEach(member => {
    const card = createMemberCard(member);
    topMemberSection.appendChild(card);
  });
}

// === CARD GENERATOR (Shared by both functions) ===
function createMemberCard(member) {
  const card = document.createElement('div');
  card.classList.add('member-card');

  card.innerHTML = `
    <img src="images/${member.image}" alt="${member.name} logo" onerror="this.src='images/default.png';">
    <h3>${member.name}</h3>
    <p>${member.description}</p>
    <p><strong>Address:</strong> ${member.address}</p>
    <p><strong>Phone:</strong> ${member.phone}</p>
    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
    <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
  `;

  return card;
}

// === TRANSLATE MEMBERSHIP LEVEL ===
function getMembershipLevel(level) {
  return level === 3 ? "Gold" : level === 2 ? "Silver" : "Member";
}

// === INIT ===
fetchMembers();
