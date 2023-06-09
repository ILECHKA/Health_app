import emote from '../../assets/Neutral_face.png';
import mood from './emots';

const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const arrow = document.querySelectorAll('.arrow');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  const liTag = [];

  // eslint-disable-next-line no-plusplus
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag.push(`<li class="non-active">${lastDateofLastMonth - i + 1}<img class="img calendar_img" src="${emote}" alt=""></li>`);
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= lastDateofMonth; i++) {
    const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'day active' : 'day';
    liTag.push(`<li class="${isToday}">${i}<img id="${Date.now() + i}" class="img calendar_img" src="${emote}" alt=""></li>`);
  }
  // eslint-disable-next-line no-plusplus
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag.push(`<li class="non-active">${i - lastDayOfMonth + 1}<img class="img calendar_img" src="${emote}" alt=""></li>`);
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;

  if (localStorage.getItem(currentDate.innerText) === null) {
    daysTag.innerHTML = liTag.join('');
    localStorage.setItem(`${months[currMonth]} ${currYear}`, liTag.join(''));
  } else if (localStorage.getItem(currentDate.innerText) !== liTag.join('')) {
    localStorage.getItem(currentDate.innerText);
    daysTag.innerHTML = localStorage.getItem(currentDate.innerText);
    const day = [];
    const nl = document.querySelectorAll('.calendar_img');
    // eslint-disable-next-line no-plusplus
    for (let i = 0, ll = nl.length; i !== ll; day.push(nl[i++]));
    day.forEach((i) => {
      const imgId = i.id;
      if (localStorage.getItem(imgId)) {
        // eslint-disable-next-line no-param-reassign
        i.src = localStorage.getItem(imgId);
      }
    });
  }
};

arrow.forEach((icon) => {
  icon.addEventListener('click', () => {
    currMonth = icon.id === 'left' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
    mood();
  });
});

export default renderCalendar;
