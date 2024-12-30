const fillDiv = document.querySelector('.fill');
const fillButton = document.getElementById('fillButton');

fillButton.addEventListener('click', () => {
  fillDiv.style.height = '100%'; // Adjust this value to control the fill amount
});
