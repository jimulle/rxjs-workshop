const Rx = require('rxjs');

Rx.Observable
    .from( [ 1, 3, 6, 10 ] )
    .map( num => num + 2 )
    .toArray()
    .subscribe( num_arr => console.log( num_arr ) );
