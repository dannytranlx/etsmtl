$('#formCours').submit(function(e) {
  e.preventDefault();
  var lien = 'http://etsmtl.ca/Etudiants-actuels/Baccalaureat/Cours-horaires-1er-cycle/Fiche-de-cours?Sigle=' + $('#sigleCours').val();
  window.location = lien;
});

$('#formBandwidth').submit(function(e) {
  e.preventDefault();
  window.location = 'http://bw.etsmtl.me/' + $('#phase').val() + '/' + $('#app').val();
});
