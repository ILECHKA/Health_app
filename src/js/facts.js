function FactList(data) {
  const fact = document.createElement('div');
  fact.classList.add('container');
  fact.classList.add('idea_container');
  fact.id = ('idea_container');
  const field = document.querySelector('.field');
  fact.innerHTML = `
  <div class="idea_navigation_container">
          <p id="fact" class="fact">${data[0].fact}</p>
        </div>
  `;
  field.prepend(fact);
}

async function getData() {
  const response = await fetch(
    'https://api.api-ninjas.com/v1/facts?limit=1&',
    {
      method: 'GET',
      headers: {
        'X-Api-Key': 'URVnC+Z9Oo2uQ2O+e8/diQ==KD8DoHVz8nfIwfko',
      },
    },
  );
  const data = await response.json();
  await FactList(data);
}

function clear() {
  const fact = document.getElementById('idea_container');
  if (fact) {
    fact.remove();
  }
}

export default function RndFact() {
  const FactButton = document.getElementById('fact__button');
  FactButton.addEventListener('click', () => {
    clear();
    getData();
  });
}
