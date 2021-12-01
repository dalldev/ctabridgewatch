const $headerButtom = document.getElementById('headerButtom');

$headerButtom.addEventListener('click', () => {
  const $header = document.getElementById('header');

  $header.classList.toggle('headerClick');
});
