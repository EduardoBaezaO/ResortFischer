Template.NuevaCabania.events({
	'submit form' : function (event, template) {
		event.preventDefault();

		var nombre      = event.target.nombre.value;
		var descripcion = event.target.descripcion.value;

		//el nombre es obligatorio
		if(nombre == ""){
			alert('Nombre no puede estar vacio');
			return false;
		}

		Cabanias.insert({
			nombre : nombre,
			descripcion : descripcion
		});
	}
});