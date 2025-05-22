//q8. palindrome
function Palindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return string === string.split("").reverse().join("");
}

console.log(Palindrome('Madam'));

// q9: Count vowels and consonants
function VowelsConsonants(str) {
  let vowels = "aeiou";
  let vCount = 0, cCount = 0;
  str.toLowerCase().split("").forEach(char => {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) vCount++;
      else cCount++;
    }
  });
  return { vowels: vCount, consonants: cCount };
}
console.log(" Vowels & consonants ':",VowelsConsonants("i am prerak charan"));

// q10. Capitalize each word
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(" Capitalized:", capitalizeWords("hello world in js")); 

// q11.Reverse words
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log("Words reversed:", reverseWords("JavaScript arrays are resizable"));

//q14.
function alphabetic(str){
    return str.replace(/[^a-zA-Z]/g, "")
}
console.log('remove non aplhabet from : ',alphabetic('sdffs123##43wewe'));



