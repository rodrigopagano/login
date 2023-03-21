

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = Object.fromEntries(new FormData(registerForm));
  fetch("/api/session/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    Swal.fire({
      title: `Usuario Registrado`,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login';
      }
    })
 
   
  })
  .catch((err) => {
    Swal.fire({
      title: 'Error a Registrar Usuario',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/register';
      }
    })
  });
});