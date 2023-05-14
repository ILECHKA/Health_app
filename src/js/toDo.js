function createToDo(data) {
  const toDo = document.createElement('div');
  toDo.classList.add('container');
  toDo.classList.add('todo_container');
  const field = document.querySelector('.field');
  toDo.innerHTML = `
  <div class="todo_navigation_container">
          <p id="activity">${data.activity}</p>
          <p id="type">${data.type}</p>
        </div>
  `;
  field.prepend(toDo);
}

async function getData() {
  const response = await fetch(
    'https://www.boredapi.com/api/activity/',
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  await createToDo(data);
}

function clear() {
  const todo = document.querySelector('.todo_container');
  if (todo) {
    todo.remove();
  }
}

export default function RndToDo() {
  const FactButton = document.getElementById('toDo');
  FactButton.addEventListener('click', () => {
    clear();
    getData();
  });
}
