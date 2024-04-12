const btn = document.getElementById('button1An');
let formulario = document.getElementById('formAn');


 formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando denuncia...';

   const serviceID = 'service_fgrhn3w';
   const templateID = 'template_e4k06ll';
   
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar denuncia';
      Swal.fire({
        title: "Denuncia enviada con éxito",
        icon: "success",
        confirmButtonText: 'Aceptar'
      });
    }, (err) => {
      btn.value = 'Enviar denuncia';
      Swal.fire({
        title: "Hubo un error al enviar la denuncia",
        text: "Error en :" + JSON.stringify(err),
        icon: "warning",
        confirmButtonText: 'Aceptar'
      });
    });

    formulario.reset();
});