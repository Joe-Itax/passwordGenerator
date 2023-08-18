//Recuperation des checkbox
const inclureChiffre = document.getElementById("inclureChiffre");
const inclureMinuscule = document.getElementById("inclureMinuscule");
const inclureMajuscule = document.getElementById("inclureMajuscule");
const inclureCharSpeciaux = document.getElementById("inclureCharSpeciaux");
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
//Bouton submit
const generatedPwd = document.getElementById("generatedPwd");
function passwordGenerated() {
  //Verification des états des checkboxs
  const includeNumber = inclureChiffre.checked;
  const includeLower = inclureMinuscule.checked;
  const includeUpper = inclureMajuscule.checked;
  const includeSpecial = inclureCharSpeciaux.checked;
  let possiblePwd = '';
  includeLower ? possiblePwd += _includeLower : possiblePwd += '';
  includeUpper ? possiblePwd += _includeUpper : possiblePwd += '';
  includeSpecial ? possiblePwd += _includeSpecial : possiblePwd += '';
  includeNumber ? possiblePwd += _includeNumber : possiblePwd += '';

  const regExpNumber = /[0-9]/;
  let password = '';
  for (let i = 0; i < pwdLength.value; i++) {
    password += possiblePwd.charAt(
      Math.floor(Math.random() * possiblePwd.length)
    );
  }
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
