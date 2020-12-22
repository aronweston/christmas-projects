const raindrops = (num) => {

    let res = "";

    if (num % 3 === 0) {
        res += "Pling"
    }

    if (num % 5 === 0) {
        res += "Plang"
    }

    if (num % 7 === 0) {
        res += "Plong"
    }

    if (res.length === 0) {
        res += num.toString();
    }

    console.log(res);
}

raindrops(28);
raindrops(1755);
raindrops(34);


//FizzBuzz

for (i = 0; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz"
    }
    if (i % 5 === 0) {
        output += "Buzz"
    }

    console.log(output || i);
}