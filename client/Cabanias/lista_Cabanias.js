Template.ListaCabanias.helpers({
	cantidad : function () {
		return Cabanias.find().count();
	},
	cabanias: function () {
		return Cabanias.find();
	}
});