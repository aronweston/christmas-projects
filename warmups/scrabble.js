//Split the word into an array
// Loop the points Object
// If the object key matches the letter, push the value of that objet key to the points array
//Loop the points array and sum to get the score.



const scrabble = (word, doubleLetter, tripleLetter, doubleWord, tripleWord) => {

    const points = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10,
    };


    let splitWord = word.split('');
    let score = [];
    let total = 0;

    points[doubleLetter] *= 2;
    points[tripleLetter] *= 3;

    splitWord.forEach(letter => {
        for (const [key, value] of Object.entries(points)) {
            if (letter === key) {
                score.push(value)
            }
        }
    });

    score.forEach(entry => {
        total += entry;
    })

    if (doubleWord) {
        total * 2;
    } else if (tripleWord) {
        total * 3;
    }

    console.log(total);
}


console.log(scrabble('cabbage', 'b', 'g', false, true));