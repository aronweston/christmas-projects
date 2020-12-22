const wordFilter = (word) => {

    let wordArray = word.split(' ');

    let newWords = [];

    for (i = 0; i < wordArray.length; i++) {
        //Loop through the words and check each time if the array contains the word, it will then only push the first value as the second iteration will return true.
        if (newWords.includes(wordArray[i]) === false) {
            newWords.push(wordArray[i]);
        }
    }
    console.log(wordArray);
    console.log(newWords);


}


wordFilter('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')



const banana = () => {

    let x = "b" + "a" + +"b" + "a";
    x.toLowerCase();

    console.log(x);
}

banana()