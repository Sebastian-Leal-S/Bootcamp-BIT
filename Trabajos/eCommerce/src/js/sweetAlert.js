function alertAgregarProducto() {
  Swal.fire({
    toast: true,
    icon: 'success',
    title: 'Guardado en el carrito',
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseenter', Swal.resumeTimer);
    },
  });
}
