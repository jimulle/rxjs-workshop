const Rx = require('rxjs');

Rx.Observable
    .from( [ 'Hello', 'there', 'RxJS' ] )
    .toArray()
    .subscribe(
        word => console.log( word.join(' ') )
    );

let arr = [ 'Nice', 'to', 'meet', 'you', 'RxJS' ];
Rx.Observable
    .from( arr )
    .reduce( (str, word) => { return str += (word + ' '); }, '' )
    .subscribe(
        sentance => console.log( sentance )
    );
