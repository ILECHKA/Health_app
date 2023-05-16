const notesH = document.getElementById('notes_h1');
let arr = [];
if (localStorage.getItem('noteARR') && localStorage.getItem('noteARR').includes(',')) {
  arr = (localStorage.getItem('noteARR').split(','));
} else if (localStorage.getItem('noteARR')) {
  arr.push((localStorage.getItem('noteARR')));
}

function statusCheck() {
  if (arr.length !== 0) {
    notesH.classList.add('hidden');
  } else {
    notesH.classList.remove('hidden');
  }
}

export default function createNote(data) {
  const ul = document.querySelector('.notes_lsit');
  const li = document.createElement('li');
  const x = document.createElement('p');
  x.classList.add('x');
  x.innerText = 'x';
  x.addEventListener('click', () => {
    li.remove();
    statusCheck();
    if (arr.includes(li.innerText.substring(5, li.innerText.length - 4))) {
      // eslint-disable-next-line no-shadow
      arr = arr.filter((x) => !x.includes(li.innerText.substring(5, li.innerText.length - 4)));
      localStorage.setItem('noteARR', arr);
      statusCheck();
    }
  });
  li.classList.add('list__item');
  li.classList.add('notes__item');
  li.id = Date.now();
  li.innerHTML = `
    <p class="ntoes_text">${data}</p>
  `;
  li.append(x);
  ul.append(li);
  arr.includes(data);
  arr.push(data);
  localStorage.setItem('noteARR', arr);
  statusCheck();
}

function newUl(ulValue) {
  const ul = document.querySelector('.notes_lsit');
  const li = document.createElement('li');
  const x = document.createElement('p');
  x.classList.add('x');
  x.innerText = 'x';
  x.addEventListener('click', () => {
    li.remove();
    if (arr.includes(li.innerText.substring(5, li.innerText.length - 4))) {
      // eslint-disable-next-line no-shadow
      arr = arr.filter((x) => !x.includes(li.innerText.substring(5, li.innerText.length - 4)));
      localStorage.setItem('noteARR', arr);
      statusCheck();
    }
  });
  li.classList.add('list__item');
  li.classList.add('notes__item');
  li.id = Date.now();
  li.innerHTML = `
    <p class="ntoes_text">${ulValue}</p>
  `;
  li.append(x);
  ul.append(li);
  statusCheck();
}

function storageData(arrValue) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrValue.length; i++) {
    newUl(arrValue[i]);
  }
}

storageData(arr);
