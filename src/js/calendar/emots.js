function mood() {
  const emote = document.querySelectorAll('.calendar_img');
  const moods = document.querySelector('.mood_list');
  const moodImg = document.querySelectorAll('.mood_img');
  let id = '';

  emote.forEach((link) => {
    link.addEventListener('click', () => {
      if (link.id) {
        moods.classList.toggle('hidden');
        id = link.id;
      }
    });
  });

  moodImg.forEach((target) => {
    target.addEventListener('click', () => {
      const img = document.getElementById(id);
      img.src = target.src;
      localStorage.setItem(`${id}`, target.src);
    });
  });
}

export default mood;
