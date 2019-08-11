function JadenCasing(str) {
    var stringArray = str.split(" ");
    var stringLength = stringArray.length;
    var newString = "";
      for(let i=0; i < stringLength; i++){
        newString = newString + stringArray[i][0].toUpperCase();
        for(let j=0; j < stringArray[i].length-1; j++){ 
         newString = newString + stringArray[i][j+1];
  //        console.log(newString);
        }
        newString = newString + " ";
      }
      return newString;
    };
  
  var str = "How can mirrors be real if our eyes aren't real";
  JadenCasing(str);

  function LetterCapitalize(str) { 
    let str2 = str.split(" ");
    let newString = "";
    for(let i=0; i < str2.length; i++){
        for(let j = 0; j < str2[i].length; j++){
            if(j === 0){
                newString = newString + str2[i][0].toUpperCase();
            } else {
                newString = newString + str2[i][j];
            }
        }
        newString = newString + " ";
    }
    return str; 
           
  }
  
  LetterCapitalize("Hello this all needs a capital first letter");