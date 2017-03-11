const Rx = require('rxjs');

Rx.Observable
    .from( [ 'Hello', 'there', 'RxJS' ] )
    .toArray()
    .subscribe(
        word => console.log( word.join(' ') )
    );

Rx.Observable
    .from( arr )
    .reduce( (str, word) => { return str += (word + ' '); }, '' )
    .subscribe(
        sentance => console.log( sentance )
    );