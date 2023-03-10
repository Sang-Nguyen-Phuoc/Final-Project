const check = Boolean(localStorage.getItem('isSignin'));
if (check) {
  const form = document.getElementById("form");
  form.style.display = 'none';

  const info = document.getElementById("info");
  info.style.display = 'block';
} else {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userArray = JSON.parse(localStorage.getItem('userArray'));

    const username = event.target.username.value;
    let checkExist = false;
    let i = 0; 
    for (i = 0; i < userArray.length; i++) {
      if (userArray[i].username === username && userArray[i].password === event.target.password.value) {
        checkExist = true;
        break;
      }
    }

    if (checkExist) {
      localStorage.setItem('isSignin', true);
      const form = document.getElementById("form");
      form.style.display = 'none';
      const info = document.getElementById("info");
      alert('Đăng nhập thành công.');
      const tmpName = userArray[i].username.value; 
      const tmpEmail = userArray[i].email.value;
      const tmpPassword = userArray[i].password.value;


      document.getElementById('name1').placeholder = tmpName;
      document.getElementById('email1').placeholder = tmpEmail;
      document.getElementById('password1').placeholder = tmpPassword;

      info.style.display = 'block';

    } else {
      alert('Đăng nhập thất bại.');
    }
  });
}
