function reverseOdd(str) {
    let newString = "";
    let array = str.split(" ");
    for (let k = 0; k < array.length; k++) {
        if (k !== array.length-1) {
            if (array[k].length % 2 == 0) {
                newString = newString + array[k] + " ";
            } else {
                for (let i = array[k].length - 1; i >= 0; i--) {
                    newString = newString + array[k][i];
                }
                newString = newString + " ";
            }
        } else {
              if (array[k].length % 2 == 0) {
                newString = newString + array[k];
            } else {
                for (let i = array[k].length - 1; i >= 0; i--) {
                    newString = newString + array[k][i];
                }
                newString = newString;
            }
        }
    }
    return newString;
}

// "One two three four"
// 'Make sure uoy only esrever sdrow of ddo length'
// ''
// 'Bananas'
// 'Even even even even even even even even even'
// 'Odd odd odd odd odd odd odd odd odd odd odd'