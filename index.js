const board = document.querySelector('.chessfg');

board.addEventListener('click', (event) => {
  if(event.target.classList.contains('chessfg__cell')) {
    event.target.classList.add('chessfg__cell_active');
  }
});