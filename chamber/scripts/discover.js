const url = 'data/discover.json'; // Adjust the path if needed
const container = document.querySelector('#discover-container');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const items = data.items;

    items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('discover-card');

      const img = document.createElement('img');
      img.src = `images/${item.image}`;
      img.alt = item.name;

      const content = document.createElement('div');
      content.classList.add('discover-content');

      const title = document.createElement('h3');
      title.textContent = item.name;

      const address = document.createElement('address');
      address.textContent = item.address;

      const desc = document.createElement('p');
      desc.textContent = item.description;

      const button = document.createElement('button');
      button.textContent = "Learn More";

      // Assemble content
      content.appendChild(title);
      content.appendChild(address);
      content.appendChild(desc);
      content.appendChild(button);

      // Assemble card
      card.appendChild(img);
      card.appendChild(content);

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
