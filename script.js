//Recuperation des checkbox
const inclureChiffre = document.getElementById("inclureChiffre");
const inclureMinuscule = document.getElementById("inclureMinuscule");
const inclureMajuscule = document.getElementById("inclureMajuscule");
const inclureCharSpeciaux = document.getElementById("inclureCharSpeciaux");
const exclureCharSimilar = document.getElementById("exclureCharSimilar");
//Recuperation de la length du mot de passe
const pwdLength = document.getElementById("pwdLength");
// console.log(pwdLength);
const inputOutput = document.querySelector('div.input-outPutPwd');
//Recuperation de l'affichage du Pwd generer
const outPutPwd = document.getElementById("outPutPwd");

//Recuperation de l'element de copie dans le presse papier
const copyPwd = document.getElementById("copyPwd");
////////////////////////////////////////////////////
const _includeNumber = "0123456789";
const _includeLower = "abcdefghijklmnopqrstuvwxyz";
const _includeUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const _includeSpecial = "$*!:;,?./§%£ø*\\#~@{}[]`|^+)(=&";
const _excludeCharSimilar = "oO01lI";
//Bouton submit
const generatedPwd = document.getElementById("generatedPwd");
function passwordGenerated() {
  //Verification des états des checkboxs
  const includeNumber = inclureChiffre.checked;
  const includeLower = inclureMinuscule.checked;
  const includeUpper = inclureMajuscule.checked;
  const includeSpecial = inclureCharSpeciaux.checked;
  const excludeCharSimilar = exclureCharSimilar.checked;
  let possiblePwd = '';
  includeLower ? possiblePwd += _includeLower : possiblePwd += '';
  includeUpper ? possiblePwd += _includeUpper : possiblePwd += '';
  includeSpecial ? possiblePwd += _includeSpecial : possiblePwd += '';
  includeNumber ? possiblePwd += _includeNumber : possiblePwd += '';

  const regExpNumber = includeNumber ? /[0-9]/ : null;
  const regExpUpper = includeUpper ? /[A-Z]/ : null;
  const regExpLower = includeLower ? /[a-z]/ : null;
  const regExpSpecialChar = includeSpecial ? /[$*!:;,?.\/§%£ø*\\#~@{}\[\]\`|^+)(=&]/ : null;
  //Verification de savoir si le checkbox "Exclure les caractères similaires [o O 0 | 1 l I]" = true; je retire tous les caractères similaires du password
  const regExpExcludeCharSimilar = /[oO01lI]/;
  if(excludeCharSimilar && regExpExcludeCharSimilar.test(possiblePwd)){
    possiblePwd = possiblePwd.replace('o', '');
    possiblePwd = possiblePwd.replace('O', '');
    possiblePwd = possiblePwd.replace('0', '');
    possiblePwd = possiblePwd.replace('1', '');
    possiblePwd = possiblePwd.replace('l', '');
    possiblePwd = possiblePwd.replace('I', '');
    possiblePwd = possiblePwd.replace('|', '');
  }
  let password = '';
  do {
    password = "";
    for (let i = 0; i < pwdLength.value; i++) {
      password += possiblePwd.charAt(
        Math.floor(Math.random() * possiblePwd.length)
      );
    }
  } while ((regExpNumber !== null && !regExpNumber.test(password)) || (regExpUpper !== null && !regExpUpper.test(password)) || (regExpLower !== null && !regExpLower.test(password)) || (regExpSpecialChar !== null && !regExpSpecialChar.test(password)));
  inputOutput.style.display = 'inherit';
  outPutPwd.value = password;
}

//Fonction pour copier le code dans le presse papier
function copyToClipboard() {
  const copyPassword = outPutPwd.value;
  navigator.clipboard.writeText(copyPassword);
}

copyPwd.addEventListener("click", copyToClipboard);
generatedPwd.addEventListener("click", function(event) {
  event.preventDefault();
  passwordGenerated();
});
