const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const btnCerrar = document.getElementById('modal-cerrar');

const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {

        const imagenSrc = tarjeta.querySelector('img').src;
        const tituloTexto = tarjeta.querySelector('h3').textContent;
        const descripcionTexto = tarjeta.querySelector('p').textContent;

        modalImagen.src = imagenSrc;
        modalTitulo.textContent = tituloTexto;
        modalDescripcion.textContent = descripcionTexto;

        modal.classList.add('activo');
    });
});

function cerrarModal() {
    modal.classList.remove('activo');
}

btnCerrar.addEventListener('click', cerrarModal);

modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        cerrarModal();
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
        cerrarModal();
    }
});

const formulario = document.getElementById('form-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    mensajeExito.style.display = 'block';

    formulario.reset();

    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 4000);
});