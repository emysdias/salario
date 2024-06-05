document.addEventListener('DOMContentLoaded', function () {
  const elements = [
      { id: 'message1', delay: 0 },
      { id: 'emoji1', delay: 1000 },
      { id: 'message2', delay: 2000 },
      { id: 'emoji2', delay: 3000 },
      { id: 'message3', delay: 4000 },
      { id: 'emoji3', delay: 5000 }
  ];

  elements.forEach(element => {
      setTimeout(() => {
          document.getElementById(element.id).classList.remove('hidden');
      }, element.delay);
  });
});
