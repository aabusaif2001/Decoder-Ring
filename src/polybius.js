// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (encode) {
      input = input.toLowerCase();
      const arrInput = input.split("");
      let result = "";
      arrInput.forEach((ch) => {
        let index = alphabet.indexOf(ch); 
        if (index > -1) {
          if (index >= 9) index -= 1; 
          const column = (index % 5) + 1;
          const row = Math.floor(index / 5) + 1;
          result += column;
          result += row;
        } else {
          result += ch;
        }
      });

      return result;
    } else {
      const splittedInput=input.split(" ");
      const inputWithNoSpace=splittedInput.join("");
      if (inputWithNoSpace.length % 2 != 0) return false;
      
      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
          const col = parseInt(input[i]);
          const row = parseInt(input[i + 1]);
          const index = col - 1 + (row - 1) * 5;
          let char = "";
          if (index === 8) char = "(i/j)";
          else if (index > 8) char = alphabet[index + 1];
          else char = alphabet[index];
          result += char;
          i++;
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
