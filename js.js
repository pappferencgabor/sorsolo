var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "micimackó"
words[2] = "Kőolaj"
words[3] = "Benzingőz"
words[4] = "Gyerekzár"
words[5] = "Rokkantkocsi"
words[6] = "Ruháskosár"
words[7] = "Bundáskenyér"
words[8] = "Bakkecske"
words[9] = "Gyapjúszőnyeg"
words[10] = "pluperfect"
words[11] = "jellygraph"
words[12] = "quickthorn"
words[13] = "rottweiler"
words[14] = "technician"
words[15] = "cowpuncher"
words[16] = "middlebrow"
words[17] = "jackhammer"
words[18] = "triphthong"
words[19] = "wunderkind"
words[20] = "dazzlement"
words[21] = "jabberwock"
words[22] = "witchcraft"
words[23] = "pawnbroker"
words[24] = "thumbprint"
words[25] = "motorcycle"
words[26] = "cryptogram"
words[27] = "torchlight"
words[28] = "bankruptcy"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(mfr) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
mfr.WordBox.value = words[rnd]
}