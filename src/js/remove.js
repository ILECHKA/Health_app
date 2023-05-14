export default function remove() {
  const navButton = document.querySelectorAll('.nav__item');
  const moods = document.querySelector('.mood_list');
  const calendar = document.querySelector('.claendar_container');
  navButton.forEach((target) => {
    target.addEventListener('click', () => {
      const fact = document.getElementById('idea_container');
      const todo = document.querySelector('.todo_container');
      if (target.id === 'calerndar-button') {
        if (fact) {
          fact.remove();
        } else if (todo) {
          todo.remove();
        }
        moods.classList.add('hidden');
      } else if (target.id === 'fact__button') {
        if (todo) {
          todo.remove();
        }
        moods.classList.add('hidden');
        calendar.classList.add('hidden');
      } else if (target.id === 'mood_nav') {
        if (fact) {
          fact.remove();
        } else if (todo) {
          todo.remove();
        }
        calendar.classList.add('hidden');
      } else if (target.id === 'toDo') {
        if (fact) {
          fact.remove();
        }
        calendar.classList.add('hidden');
        moods.classList.add('hidden');
      }
    });
  });
}
