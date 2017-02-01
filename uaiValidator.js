// Cette fonction vérifie la validité d'un code UAI donné en variable
// et elle retourne TRUE si le code UAI est correct, sinon FALSE
// Basé sur la version PHP écrit par Julien Delmas
// http://blog.juliendelmas.fr/?qu-est-ce-que-le-code-rne-ou-uai

function verifierCodeUai(codeUai) {

  // Un code valide est toujours un string
  if (typeof (codeUai) !== 'string') {
    return false;
  }

  // On supprime les espaces et on met tout en minuscules
  var codeUaiPropre = codeUai.replace(/ /g, '').toLowerCase();

  // Un code valide a toujours une longueur de 8
  if (codeUaiPropre.length !== 8) {
    return false;
  }

  // alphabet pris en compte (23 lettres, sans I, O et Q)
  var alphabet23 = 'abcdefghjklmnprstuvwxyz'.split('');

  // On récupère les chiffres et les lettres dans des variables séparées
  var codeUaiPropreChiffres = codeUaiPropre.substr(0, 7);
  var codeUaiPropreLettre = codeUaiPropre.substr(7, 1);

  // Le rang de la lettre correspond au reste de la division par 23
  var rangCalcule = codeUaiPropreChiffres % 23;

  // On récupère la lettre calculée dans l'alphabet
  var lettreCalculee = alphabet23[rangCalcule];

  // On compare la lettre du code UAI à la lettre calculée et on retourne TRUE ou FALSE
  var validCode = codeUaiPropreLettre == lettreCalculee ? true : false;

  return validCode;
}

// Exemple d'utilisation de cette fonction

function test() {
  var codes = ['0941232D', '09  41  232D', 4324, '  09  41  235435432D    ', undefined, null];

  for (var i = 0; i < codes.length; i++) {
    var valid = verifierCodeUai(codes[i]);
    console.log('Le code', '"' + codes[i] + '"', 'est', valid ? 'CORRECT' : 'INCORRECT');
  }
}

test();