$('#formCours').submit(function() {
  var lien = "http://etsmtl.ca/Etudiants-actuels/Baccalaureat/Cours-horaires-1er-cycle/Fiche-de-cours?Sigle=" + $('#sigleCours').val();
  window.location = lien;
  return false;
});

$('#btnBandwidth3').click(function() {
	window.location = "http://bw.etsmtl.me/"+$('#phase').val()+"/"+$('#app').val();
});
