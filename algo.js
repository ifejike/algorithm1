function analyzeSentence(sentence) {
    const vowels = new Set('aeiouAEIOU'); // sets dont allow duplictaes
    let wordCount = 0;
    let vowelCount = 0;
  
    for (const char of sentence) { // char is picking all characters from sentence variable.
      if (vowels.has(char)) { // if it has any of the characters that you are picking.
        vowelCount++; // automatically increament vowelCount By 1
      }
      if (char === ' ') { // when it automatically detects space.
        wordCount++;
      } else if (char === '.') {
        break;
      }
    }
  
    const result = {
      length: sentence.length,
    //   after trimming it, if it ends with (.) return 1 else 2
    // Using ternary operator.
      wordCount: wordCount + (sentence.trim().endsWith('.') ? 1 : 0),
      vowelCount,
    };
  
    console.log("Length of the sentence:", result.length);
    console.log("Number of words in the sentence:", result.wordCount);
    console.log("Number of vowels in the sentence:", result.vowelCount);
  
    return result;
  }
  
  // Example usage:
  const sentence = "This is a simple sentence.";
  analyzeSentence(sentence);
  