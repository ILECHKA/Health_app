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
  let liTag = '';
  // eslint-disable-next-line no-plusplus
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li>${lastDateofLastMonth - i + 1}<img class="img calendar_img" src="${emote}" alt=""></li>`;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= lastDateofMonth; i++) {
    const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? 'active' : '';

    liTag += `<li class="${isToday}">${i}<img id="${Date.now() + i}" class="img calendar_img" src="${emote}" alt=""></li>`;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li>${i - lastDayOfMonth + 1}<img class="img calendar_img" src="${emote}" alt=""></li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
  console.log(liTag);
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
