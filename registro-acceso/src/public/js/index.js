$(document).ready(function () {
  const divUser = document.getElementById('divUser');

  let user = JSON.parse(localStorage.getItem('user')) ?? [];

  if (user) {
    const header = document.createElement('h2');
    header.textContent = user.name;
    divUser.appendChild(header);
  }
});
