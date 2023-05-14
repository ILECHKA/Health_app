import RndFact from './facts';
import renderCalendar from './calendar/calendar';
import mood from './calendar/emots';
import calendar from './calendarButton';
import remove from './remove';
import RndToDo from './toDo';
import todaysMood from './todaysMood';

window.addEventListener('DOMContentLoaded', () => {
  todaysMood();
  RndToDo();
  calendar();
  renderCalendar();
  mood();
  RndFact();
  remove();
});
