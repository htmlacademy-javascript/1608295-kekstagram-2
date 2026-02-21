function isValidLength (string, maxLength) {
  return string.length <= maxLength;
}
console.log (isValidLength('проверка', 5));

function isPalindrome(string){
  let normalized = string.replaceAll(' ', '').toUpperCase();
  let reversed = '';

  for(let i = normalized.length - 1; i >= 0 ; i--){
    reversed += normalized[i];
  }

  return reversed === normalized;
}

console.log (isPalindrome('Лёша на полке клопа нашёл'));


