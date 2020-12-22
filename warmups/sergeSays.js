//Serge Says

const serge = (ask) => {

    if (ask.includes("?")) {
        return 'Sure'
    } else if (ask.length === 0) {
        return 'Fine, be that way';
    } else if (ask === ask.toUpperCase()) {
        return 'Woah, chill out.';
    } else {
        return 'Whatever'
    }

}


console.log(serge('Hey serge?'));
console.log(serge('HEY SERGE'));
console.log(serge(''));
console.log(serge('what colour is the'));