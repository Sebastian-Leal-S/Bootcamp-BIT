$(document).ready(function () {
  $('#login').submit(function (event) {
    event.preventDefault();

    let user = $(this).serialize();

    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'post',
      data: user,
      success: function (resp) {
        localStorage.setItem('user', JSON.stringify(resp));
        window.location.href = 'http://localhost:3000/';
      },
    });
  });
});
