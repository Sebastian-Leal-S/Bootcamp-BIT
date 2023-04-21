$(document).ready(function () {
  $('#sign_up').submit(function (event) {
    event.preventDefault();

    let newUser = $(this).serialize();

    $.ajax({
      url: 'http://localhost:3000/sign_up',
      method: 'post',
      data: newUser,
      success: function (resp) {
        alert(resp);
        window.location.href = 'http://localhost:3000/login';
      },
    });
  });
});
