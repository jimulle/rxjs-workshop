const Rx = require('rxjs');

/* input */
let arr = [ 'Hello', 'there', 'RxJS' ];

/* vanillaJS to concatenate and output the words as a sentance */
let str = '';
for (let i=0; i<arr.length; i++) {
    str += arr[i] + ' ';
}
console.log( str );

/* rewrite the code above using Rx */
Rx.Observable
    .from( arr )
    .reduce( (str, word) => { return str += (word + ' '); }, '' )
    .subscribe(
        sentance => console.log( sentance )
    );
    