window.onload = () => {
  const $chargingScreen = document.getElementById('charging-screen');
  const $body = document.body;

  $chargingScreen.style.display = 'none';
  $body.style.overflowY = 'scroll';
};

const $headerButtom = document.getElementById('headerButtom');

$headerButtom.addEventListener('click', () => {
  const $header = document.getElementById('header');

  $header.classList.toggle('headerClick');
});
