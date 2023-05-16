import createNote from './notes';

function createToDo(data) {
  const toDo = document.createElement('div');
  const notes = document.querySelector('.notes');
  toDo.classList.add('container');
  toDo.classList.add('todo_container');
  const field = document.querySelector('.field');
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Add to notes';
  button.addEventListener('click', () => {
    createNote(data.activity);
    toDo.remove();
    notes.classList.remove('hidden');
  });
  toDo.innerHTML = `
  <div class="todo_navigation_container">
          <p id="activity">${data.activity}</p>
          <p id="type">${data.type}</p>
        </div>
  `;
  toDo.append(button);
  field.prepend(toDo);
}

const loader = document.querySelector('.loader');

async function getData() {
  const response = await fetch(
    'https://www.boredapi.com/api/activity/',
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  setTimeout(() => {
    loader.classList.toggle('hidden');
    createToDo(data);
  }, 1000);
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
    loader.classList.toggle('hidden');
    getData();
  });
}
