function LongestWord(sen) { 

    // code goes here 
    sen = sen.replace(/[^a-zA-Z ]/g, "");
    var stringArray = sen.split(" ");
    var thisIsTheWord = "";
    for(let i=0; i < stringArray.length; i++){
        if(stringArray[i].length > thisIsTheWord.length){
            thisIsTheWord = stringArray[i];
        }
        sen = thisIsTheWord;
    }
    return sen; 
           
  }
  
  LongestWord("hello$!! or");