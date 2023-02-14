export const checkPasswordLetters = (passwordValue) => { 
  let regexp = /[A-z]/;
  return regexp.test(passwordValue);
}
export const checkPasswordNumbers = (passwordValue) => {
  let regexp = /\d/;
  return regexp.test(passwordValue);
}
export const checkPasswordSymbols = (passwordValue) => {
  let regexp = /[!@#$%^&*]/;
  return regexp.test(passwordValue);
}
export const checkPasswordLvl = (passwordValue) => {
  if(passwordValue !== '' && passwordValue.length < 8) {
    return ['ease','ease','ease'];
  } else {
      let lettersResult = checkPasswordLetters(passwordValue);
      let numbersResult = checkPasswordNumbers(passwordValue);
      let symbolsResult = checkPasswordSymbols(passwordValue);

      if(lettersResult && numbersResult && symbolsResult) {
        return ['strong','strong','strong'];
      }
      if((lettersResult && symbolsResult) || (lettersResult && numbersResult) || (numbersResult && symbolsResult)) {
        return ['medium','medium',''];
      }
      if(lettersResult || numbersResult || symbolsResult) {
        return ['ease','',''];
      }
    return ['','',''];
  }
}