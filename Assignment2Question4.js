// JavaScript source code
function a2q4(names=[]) {
    var numOk = 0; //number of words that contain the wanted pattern.
    var patIn = 0; //number to check if the pattern is in the word.
    for (var i in names) {
        //find the pattern: starts with "po" or "pa", does NOT contain "u"
        //search(pattern) returns -1 if the pattern is not matched.
        patIn = names[i].search(/^po/);//looking for words starting with po

        if (patIn != -1) {//If the word starts with 'po'
            patIn = names[i].search(/u/);
            if (patIn == -1) {//If the word doesn't contain the letter 'u'
                numOk++;
            }
        } else {//looking for words starting with 'pa'
            patIn = names[i].search(/^pa/);
            if (patIn != -1) {
                patIn = names[i].search(/u/);
                if (patIn == -1) {//If the word doesn't contain the letter 'u's
                    numOk++;
                }
            }
        }
    }
    document.getElementById("tester").innerHTML = "Using the array [party, flight, cave, whole, bubble, pollution], the value is: " + numOk;
}