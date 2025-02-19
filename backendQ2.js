
function sumDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123)); 


function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

function reverseWords(sentence) {
    if (!sentence.includes(" ")) return sentence;
    let words = sentence.split(" ");
    return words.pop() + " " + reverseWords(words.join(" "));
}

console.log(reverseWords("World Hello"));


function sumDigitsIterative(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumDigitsIterative(123)); 


function comparePerformance() {
    let num = 9876543210123456789;
    console.time("Recursive SumDigits");
    sumDigits(num);
    console.timeEnd("Recursive SumDigits");
    
    console.time("Iterative SumDigits");
    sumDigitsIterative(num);
    console.timeEnd("Iterative SumDigits");
}

comparePerformance();
