// Funcion onclick 
// Cambia el estilo del input y agregar boton "Agregar"
// Al escribir un texto, cambiar
function newList () {
	// Cambia el estilo del input inicial
	document.getElementById('list').setAttribute('class', 'grey-input');
	// Agrega la clase is-shown que modifica el div contenedor
	var listContent = document.getElementById('list-content');
	listContent.classList.add('is-shown');
	// Crear Input Button
	var btnAdd = document.createElement('input');
	// Añadir atributos al elemento input., type, ID estilo, onclick, value
	btnAdd.setAttribute('type', 'button')
	btnAdd.setAttribute('id', 'btn-add');
	btnAdd.setAttribute('onclick', 'addList()');
	btnAdd.setAttribute('value', 'Añadir');
	// Crear Icono borrar
	var iconClose = document.createElement('i');
	iconClose.classList.add('fa', 'fa-times', 'fa-lg');
	// Insertar elementos al div general
	var sectionAdd = document.createElement('div');
	sectionAdd.appendChild(btnAdd);
	sectionAdd.appendChild(iconClose);
	// Insertar texto al div contenedor
	cont.appendChild(sectionAdd);

	// Para cerrar opcion Añadir Lista
	iconClose.addEventListener('click', function(){
		document.getElementById('list').setAttribute('class', 'initial-input');
		listContent.removeAttribute('class');
		cont.removeChild(sectionAdd);
	});
}


// Funcion para guardar la lista
function addList() {
	alert('Aqui pasara algo');
}
