document.addEventListener('DOMContentLoaded', function () {
  const noButton = document.getElementById('noButton');
  const yesButton = document.getElementById('yesButton');

  noButton.addEventListener('mouseover', function () {
    const offsetX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const offsetY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
  });

  yesButton.addEventListener('click', function () {
    window.location.href = './html/congratulations.html';
  });
});
