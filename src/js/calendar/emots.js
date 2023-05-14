function mood() {
  const emote = document.querySelectorAll('.calendar_img');
  emote.forEach((icon) => {
    icon.addEventListener('click', () => {
      console.log(icon.id);
    });
  });
}

export default mood;
