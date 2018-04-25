const container = document.getElementById('contenedor-general');
const form = document.getElementById('validarFormulario');
const inputName = document.getElementById('nom-ape');
const inputCellphone = document.getElementById('celular');
const inputEmail = document.getElementById('email');
const select = document.getElementById('carrera');
var carreraEscogida = "";

const expRegularText  = /^[a-zA-Z ]+$/;
const expRegularEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

function dibujarModal(mensaje){
	const contenedorModal = document.createElement('div');
		contenedorModal.setAttribute('class', 'js-modal');
		contenedorModal.setAttribute('id', 'js-modal-id');
		contenedorModal.innerHTML = mensaje;
		document.body.appendChild(contenedorModal);
}

select.addEventListener('change', function(){
	var selectedOption = select.options[select.selectedIndex];
	console.log(selectedOption.value);
	if(selectedOption.value==='default'){
		carreraEscogida = "default";
	}
	if(selectedOption.value==='carrera-derecho'){
		carreraEscogida = "Derecho";
	}
	if(selectedOption.value==='carrera-diseno'){
		carreraEscogida = "Diseño";
	}
	if(selectedOption.value==='carrera-ingenieria'){
		carreraEscogida = "Ingeniería";
	}
	if(selectedOption.value==='carrera-arquitectura'){
		carreraEscogida = "Arquitectura";
	}
	if(selectedOption.value==='carrera-licenciado'){
		carreraEscogida = "Licenciado";
	}
	if(selectedOption.value==='carrera-medicina'){
		carreraEscogida = "Medicina";
	}
})

form.addEventListener('submit', function(e){
	container.classList.add('is-blur');
	if(inputName.value==""){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Por favor, escríbenos tu nombre.</p></div></div>");
			e.preventDefault();
			inputName.focus();
	}
	else if(!expRegularText.test(inputName.value)){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\">	<h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Verifica que el nombre no tenga acentos, caracteres especiales o espacios en blanco.</p></div></div>");
			e.preventDefault();
			inputName.focus();
	}
	else if(inputCellphone.value==""){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Por favor, escríbenos tu número celular.</p></div></div>");
			e.preventDefault();
			inputCellphone.focus();
	}
	else if(isNaN(inputCellphone.value)){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Parece ser que tu número de celular no tiene un formato adecuado.</p></div></div>");
			e.preventDefault();
			inputCellphone.focus();
	}
	else if(inputCellphone.value.length<10 || inputCellphone.value.length>10){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Recuerda que un número de celular tiene 10 dígitos.</p></div></div>");
			e.preventDefault();
			inputCellphone.focus();
	}
	else if(inputName.value.length<=2){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\">	<h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Tu nombre parece ser demasiado corto.</p></div></div>");
			e.preventDefault();
			inputName.focus();
	}
	
	else if(inputEmail.value==""){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Por favor, escríbenos tu email.</p></div></div>");
			e.preventDefault();
			inputEmail.focus();
	}
	else if(!expRegularEmail.test(inputEmail.value)){
		dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Tu email parece no tener un formato adecuado.</p></div></div>");
			e.preventDefault();
			inputEmail.focus();
	}
	else{
		e.preventDefault();
		container.classList.remove('is-blur');
		if(carreraEscogida === "default"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/target.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">Primero debes escoger una carrera de la lista de opciones.</p></div></div>");
		}
		if(carreraEscogida === "Diseño"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", la carrera de Diseño Gráfico te permitirá ser un profesional capacitado para diseñar, gestionar, producir y evaluar proyectos de comunicación gráfica masiva por medios gráficos impresos, digitales web e internet.</p></div></div>");
		}
		if(carreraEscogida === "Derecho"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", la carrera de Derecho es una disciplina, que brinda instrumentos para lograr que las personas en sus relaciones diarias con los demás, se rijan por leyes que permitan que la sociedad funcione justa y ordenadamente.</p></div></div>");
		}
		if(carreraEscogida === "Ingeniería"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", la carrera de Ingeniería es el conjunto de conocimientos científicos y técnológicos para la innovación, invención, desarrollo y mejora de técnicas y herramientas para satisfacer las necesidades y resolver los problemas de las empresas y la sociedad.</p></div></div>");
		}
		if(carreraEscogida === "Arquitectura"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", el objetivo principal de la Arquitectura es formar a profesionales capaces de diseñar y construir todo tipo de edificaciones. El arquitecto es un creador por excelencia.</p></div></div>");
		}
		if(carreraEscogida === "Licenciado"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", la licenciatura es el título académico o grado académico que se obtiene tras realizar ciertos estudios de educación superior de entre cuatro y seis años de duración.</p></div></div>");
		}
		if(carreraEscogida === "Medicina"){
			dibujarModal("<div class=\"js-modal__close\"></div><div class=\"js-modal__content\"><div class=\"js-modal__header\"><h1 class=\"js-modal__title\"></h1></div><div class=\"js-modal__footer\"><img src=\"imagenes/asesora.png\" class=\"js-modal__icon\" alt=\"Este es un icono representativo a un mensaje de ayuda\"><p class=\"js-modal__message\">" + inputName.value + ", la Medicina es una disciplina que consiste en el cuidado de la salud, la prevención, y el diagnóstico y el tratamiento de las enfermedades o dolencias que podrían afectar el bienestar del cuerpo humano.</p></div></div>");
		}			
	}
});

document.addEventListener('click', function(e){
	if(e.target.id.toLowerCase() === 'js-modal-id'){
		contenedorModal = document.getElementById('js-modal-id');
		contenedorModal.remove();
		container.classList.remove('is-blur');
	}
	else if(e.target.className==='js-modal__close'){
		contenedorModal = document.getElementById('js-modal-id');
		contenedorModal.remove();
		container.classList.remove('is-blur');
	}
})
document.addEventListener('keyup', function(e){
	if(e.key === 'Escape'){
		contenedorModal = document.getElementById('js-modal-id');
		contenedorModal.remove();
		container.classList.remove('is-blur');
	}
})
document.addEventListener('keydown', function(e){
	if(e.key === 'Enter'){
		contenedorModal = document.getElementById('js-modal-id');
		contenedorModal.remove();
		container.classList.remove('is-blur');
	}
})