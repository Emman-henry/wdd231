// === DOM READY ===
document.addEventListener('DOMContentLoaded', () => {
  // === Highlight Active Nav Link ===
  const path = window.location.pathname;
  const currentPage = path.split('/').pop() || "index.html"; // fallback for root
  document.querySelectorAll('.nav-pages').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  });

  // === Hamburger Toggle ===
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Optional: Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.innerHTML = '&#9776;';
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  // === View Toggle Buttons (Grid/List) ===
  const membersContainer = document.getElementById('members');
  const gridBtn = document.getElementById('gridBtn');
  const listBtn = document.getElementById('listBtn');

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

  // === Fetch and Display Members ===
  fetchMembers();
});

// === FETCH MEMBERS ===
async function fetchMembers() {
  const membersContainer = document.getElementById('members');
  const topMemberSection = document.getElementById("Top-members");

  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    if (membersContainer) displayMembers(members, membersContainer);
    if (topMemberSection) displayTopMembers(members, topMemberSection);
  } catch (error) {
    console.error('Failed to load member data', error);
  }
}

// === DISPLAY ALL MEMBERS (Directory) ===
function displayMembers(members, container) {
  container.innerHTML = '';
  members.forEach(member => {
    const card = createMemberCard(member);
    container.appendChild(card);
  });
}

// === DISPLAY TOP 3 GOLD MEMBERS ===
function displayTopMembers(members, container) {
  const topMembers = members.filter(m => m.membership === 3).slice(0, 3);

  container.innerHTML = '';
  if (topMembers.length === 0) {
    container.innerHTML = "<p>No Gold Members available at the moment.</p>";
    return;
  }

  topMembers.forEach(member => {
    const card = createMemberCard(member);
    container.appendChild(card);
  });
}

// === CREATE MEMBER CARD ===
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
  switch (level) {
    case 3: return "Gold";
    case 2: return "Silver";
    default: return "Member";
  }
}
