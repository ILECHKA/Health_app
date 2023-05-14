export default function todaysMood() {
  const moodNav = document.getElementById('mood_nav');
  const moods = document.querySelector('.mood_list');
  const moodImg = document.querySelectorAll('.mood_img');

  moodNav.addEventListener('click', () => {
    moods.classList.toggle('hidden');
  });

  function source(target) {
    let src = '';
    src = target.src;
    return console.log(src);
  }

  moodImg.forEach((target) => {
    target.addEventListener('click', () => {
      moods.classList.toggle('hidden');
      source(target);
    });
  });
}
