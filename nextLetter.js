function LetterChanges(str) { 
    var newString = "";
    for(let i=0; i < str.length; i++){
        let letter = str.charCodeAt(i);
        if(letter == 122){
          letter = 096;
        }
        if(letter == 32){
          letter = 31;
        }
        let letter2 = letter + 1;
        let vowels = ["a","e","i","o","u"];
        let newLetter = String.fromCharCode(letter2);
        for(let j=0; j < vowels.length; j++){
          if(newLetter == vowels[j]){
            newLetter = newLetter.toUpperCase();
//             newString = newString + newLetter;
          }
        }
        newString = newString + newLetter;
//         console.log(letter);
    }
  // code goes here  
  return newString; 
         
}
   
// keep this function call here 
var str = "zhello"
LetterChanges(str);  