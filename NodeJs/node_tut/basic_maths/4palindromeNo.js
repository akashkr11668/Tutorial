// Write a JavaScript program using function to find out whether a number is a palindrome or not. 
// The console must display 'The number is a palindrome' if it is a palindrome otherwise it must display 'The number is not a palindrome



function isPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

const num = 12321;

if (isPalindrome(num)) {
  console.log('The number is a palindrome');
} else {
  console.log('The number is not a palindrome');
}