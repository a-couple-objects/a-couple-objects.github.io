element = document.getElementById('k');
if (localStorage.getItem("seen-before") != "yes") {
  localStorage.setItem("seen-before", "yes");
  alert('Welcome to the website! Remember to check the source and leave feedback with the input before you leave.');
  element.style.display = 'block';
  };
