// Funcion añadir Lista al hacer click en Input

function newList () {
	// Cambia el estilo del input inicial
	document.getElementById('list').setAttribute('class', 'grey-input');
	// Agrega la clase is-shown que modifica el div contenedor
	var initialList = document.getElementById('initial-list');
	initialList.classList.add('is-shown');
	// Crear Input Button
	var btnAdd = document.createElement('input');
	// Añadir atributos al elemento input., type, ID estilo, onclick, value
	btnAdd.setAttribute('type', 'button');
	btnAdd.setAttribute('id', 'btn-add');
	btnAdd.setAttribute('onclick', 'addList()');
	btnAdd.setAttribute('value', 'Añadir');
	// Crear Icono borrar
	var iconClose = document.createElement('i');
	iconClose.classList.add('fa', 'fa-times', 'fa-lg');
	// Insertar elementos al div general
	var sectionAdd = document.createElement('div');
	sectionAdd.classList.add('list-options');
	// Agregar contenidos al padre
	sectionAdd.appendChild(btnAdd);
	sectionAdd.appendChild(iconClose);
	// Insertar al div contenedor html
	cont.appendChild(sectionAdd);
	// Deshabilitar evento onclick del input
	document.getElementById('list').removeAttribute('onclick');
	// Para cerrar opcion Añadir Lista
	iconClose.addEventListener('click', function(){
		document.getElementById('list').setAttribute('class', 'initial-input');
		initialList.removeAttribute('class');
		cont.removeChild(sectionAdd);
		// Al cerrar la opcion de agregar nueva lista, volver a agregar el evento
		document.getElementById('list').setAttribute('onclick', 'newList()');
	});
};


// Funcion para guardar la lista. Se crea un nuevo elemento hijo de div "list-full"

function addList() {
	// Crear div contenedor de la lista creada
	var createList = document.createElement('div');
	// Agregar clase para darle estilo
	createList.setAttribute('class','list-ready');
	// Crear elemento div con texto "Añadir una tarjeta"
	var sectionCard = document.createElement('div');
	var linkCard = document.createElement('a');
	// Añadir atributos enlace
	linkCard.setAttribute('href', '#');
	linkCard.setAttribute('onclick', 'newCard()');
	// Añadir Nodo Texto al Enlace
	var newCard = document.createTextNode('Añadir una tarjeta...');
	linkCard.appendChild(newCard);
	sectionCard.appendChild(linkCard);
	// Crear elemento h3 con titulo de la lista
	var titleList = document.createElement('h3');
	var nameList = document.getElementById("list").value;
	var nameListNode = document.createTextNode(nameList);
	titleList.appendChild(nameListNode);
	// Agregar Nodos Elemento al padre
	createList.appendChild(titleList);
	createList.appendChild(sectionCard);
	// Agregar Nodo al Html
	var listFull = document.getElementById('list-full');
	listFull.insertBefore(createList, listFull.childNodes[3]);
}

function newCard () {
	alert('Aqui se hará magiaaa');
}