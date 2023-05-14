export default function calendar() {
  const CalendarButton = document.getElementById('calerndar-button');
  const Calendar = document.querySelector('.claendar_container');
  CalendarButton.addEventListener('click', () => {
    Calendar.classList.toggle('hidden');
  });
}
