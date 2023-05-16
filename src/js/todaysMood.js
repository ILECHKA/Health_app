export default function todaysMood() {
  const moods = document.querySelector('.mood_list');
  const moodImg = document.querySelectorAll('.mood_img');
  moodImg.forEach((target) => {
    target.addEventListener('click', () => {
      moods.classList.toggle('hidden');
    });
  });
}
