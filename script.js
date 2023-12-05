document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    var nombre = document.getElementById('nombreInput').value;
    var email = document.getElementById('emailInput').value;
    var mensaje = document.getElementById('mensajeInput').value;

    var comentarioElemento = document.createElement('li');
    comentarioElemento.innerHTML = '<strong>' + nombre + ':</strong> ' + mensaje;
  

    var comentariosLista = document.getElementById('comentarios');
    comentariosLista.appendChild(comentarioElemento);
  

    document.getElementById('nombreInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('mensajeInput').value = '';
  });
  