// Funcion añadir Lista al hacer click en Input
function newList () {
	// Cambia el estilo del input inicial
	document.getElementById('list').setAttribute('class', 'grey-input');
	// Agrega la clase is-shown que modifica el div contenedor
	var initialList = document.getElementById('initial-list');
	initialList.classList.add('is-shown');
	initialList.style.paddingTop = null;
	// Crear Input Button
	var btnSave = document.createElement('input');
	// Añadir atributos al elemento input., type, ID estilo, onclick, value
	btnSave.setAttribute('type', 'button');
	btnSave.setAttribute('id', 'btn-add');
	// Si hay al menos un caracter en el input, se agrega el evento onclick
	btnSave.setAttribute('value', 'Guardar');
	// Crear Icono borrar
	var iconClose = document.createElement('i');
	iconClose.classList.add('fa', 'fa-times', 'fa-lg');
	// Insertar elementos al div general
	var sectionSave = document.createElement('div');
	sectionSave.classList.add('list-options');
	// Agregar contenidos al padre
	sectionSave.appendChild(btnSave);
	sectionSave.appendChild(iconClose);
	// Insertar al div contenedor html
	cont.appendChild(sectionSave);
	// Deshabilitar evento onclick del input
	document.getElementById('list').removeAttribute('onclick');
	document.getElementById('list').setAttribute('onkeyup', 'verificatorText()');
	// Para cerrar opcion Añadir Lista
	iconClose.addEventListener('click', function(){
		document.getElementById('list').setAttribute('class', 'initial-input');
		initialList.removeAttribute('class');
		cont.removeChild(sectionSave);
		// Al cerrar la opcion de agregar nueva lista, volver a agregar el evento
		document.getElementById('list').setAttribute('onclick', 'newList()');
	});
};


function verificatorText() {
	// Si hay al menos un caracter en el input, se agrega el evento onclick
	var inputTxt = document.getElementById('list').value;
	if (inputTxt.length >= 1) {
		document.getElementById('btn-add').setAttribute('onclick', 'addList()');
	}
	// Si no hay texto (porque se borro) o agrega solo espacios
	if (inputTxt.length == 0 || /^\s+$/.test(inputTxt)) {
		document.getElementById('btn-add').removeAttribute('onclick');
	}
}
// Funcion para guardar la lista. Se crea un nuevo elemento hijo de div "list-full"

function addList() {
	// Crear div contenedor de la lista creada
	var createList = document.createElement('div');
	// Agregar clase para darle estilo
	createList.setAttribute('class','list-ready');
	// Crear elemento div con texto "Añadir una tarjeta"
	var sectionCard = document.createElement('div');
	sectionCard.setAttribute('class', 'add-card');
	sectionCard.setAttribute('id', 'new-card');
	var linkCard = document.createElement('a');
	// Añadir atributos enlace
	linkCard.setAttribute('href', '#');
	linkCard.setAttribute('class', 'open-card');
	//linkCard.setAttribute('onclick', 'newCard()');
	// Añadir Nodo Texto al Enlace
	var newCard = document.createTextNode('Añadir una tarjeta...');
	linkCard.appendChild(newCard);
	sectionCard.appendChild(linkCard);
	// Crear elemento div con titulo de la lista
	var titleList = document.createElement('div');
	titleList.setAttribute('class', 'title-list');
	var nameList = document.getElementById("list").value;
	var nameListNode = document.createTextNode(nameList);
	titleList.appendChild(nameListNode);
	// Agregar Nodos Elemento al padre
	createList.appendChild(titleList);
	createList.appendChild(sectionCard);
	// Agregar Nodo al Html
	var listFull = document.getElementById('list-full');
	listFull.insertBefore(createList, listFull.childNodes[0]);

	// Se reinicia estado
	document.getElementById('list').setAttribute('class', 'initial-input');
	document.getElementById('initial-list').style.paddingTop = 0;
	// Se remueve .is-shown
	document.getElementById('initial-list').removeAttribute('class');
	cont.removeChild(document.getElementsByClassName('list-options')[0]);
	// Al cerrar la opcion de agregar nueva lista, volver a agregar el evento
	document.getElementById('list').setAttribute('onclick', 'newList()');
	// Limpiar input
	document.getElementById('list').value = '';

	//Añadir Tarjeta 
	document.getElementById('new-card').addEventListener('click', function () {
		// Crear nuevos elementos 
		var addCard = document.getElementsByClassName('add-card');
		var txtSection = document.createElement('div');
		txtSection.setAttribute('class', 'txt-section');
		var textarea = document.createElement('textarea');
		textarea.setAttribute('class', 'txt-card');
		textarea.setAttribute('id', 'contentcard');
		txtSection.appendChild(textarea);
		// Crear seccion Boton Añadir
		var btnSection = document.createElement('div');
		btnSection.setAttribute('class', 'btn-controls' );
		// Crear Input Button
		var btnAdd = document.createElement('input');
		// Añadir atributos al elemento input., type, ID estilo, onclick, value
		btnAdd.setAttribute('type', 'button');
		btnAdd.setAttribute('id', 'btn-add');
		//btnAdd.setAttribute('onclick', 'addCard()');
		btnAdd.setAttribute('value', 'Añadir');
		// Crear Icono borrar
		var iconClose = document.createElement('i');
		iconClose.classList.add('fa', 'fa-times', 'fa-lg');
		// Integrar elementos div Añadir
		btnSection.appendChild(btnAdd);
		btnSection.appendChild(iconClose);
		// Inserta textarea antees del titulo de lista (Prueba 2)
		createList.insertBefore(txtSection, sectionCard);
		createList.insertBefore(btnSection, sectionCard);
		// Ocultar Añadir Tarjeta
		sectionCard.style.display = 'none';
		// Para cerrar opcion Añadir Lista
		iconClose.addEventListener('click', function(){
			sectionCard.style.display = null;
			createList.removeChild(txtSection);
			createList.removeChild(btnSection);
		});
		// Para capturar
		btnAdd.addEventListener('click', function () {
			// Funcion verificar que hay contenido en textarea
			var cardAlreadySection = document.createElement('div');
			cardAlreadySection.setAttribute('class', 'create-card');
			var titlecard = document.createTextNode(textarea.value);
			cardAlreadySection.appendChild(titlecard);
			createList.insertBefore(cardAlreadySection, txtSection);
			// Limpiar
			textarea.value = '';
			// Focus
			textarea.focus();
		});	
	});	
}

/*function addCard () {
	alert('aqui se creara una tarjetita :3');
} */