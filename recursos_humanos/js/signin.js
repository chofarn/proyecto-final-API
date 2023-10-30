window.onload = init;

function init() {

      if (!localStorage.getItem('token')) {
            document.querySelector('.btn-secondary').addEventListener('click', function() {
                  window.location.href = 'login.html';
            });

            document.querySelector('.btn-primary').addEventListener('click', signin);
            }
            else {
                  window.location.href = 'rh.html';
            }
}
function signin() {
      var name = document.getElementById('input-name').value;
      var last_name = document.getElementById('input-last-name').value;
      var mail = document.getElementById('input-mail').value;
      var pass = document.getElementById('input-password').value;
      var phone = document.getElementById('input-phone').value;
      var address = document.getElementById('input-address').value;

      axios({
            method:'post',
            url: 'http://localhost:3000/user_proyecto/signin',
            data: {
                  user_name: name,
                  user_last_name: last_name,
                  user_mail: mail,
                  user_password: pass,
                  user_phone: phone,
                  user_address: address
            }
      }).then(function(res) {
          console.log(res);
          alert("User created correctly");
          window.location.href = 'login.html';
      }).catch(function(err) {
            console.log(err);
      });
}