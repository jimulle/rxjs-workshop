const Rx = require('rxjs');

// emit the values of given array at interval provided
const emitOverInterval = (arr, ms) => {
    return Rx.Observable
                .interval(ms || 500)
                .take(arr.length)
                .map(v => arr[v]);
};

// add one to each number then log the result
// emitOverInterval([0,1,2,3,4], 500)
//     .map(x=>x+1)
//     .subscribe(
//         value => console.log( value )
//     );

// // merge two observable streams
// const stream1 = emitOverInterval([1,2,3,4,5,6], 500);
// const stream2 = emitOverInterval(['a','b','c'], 900);
// stream1
//     .merge(stream2)
//     .subscribe(
//         value => console.log( value )
//     );

    //   stream1: ----1----2----3----4----5----|-->
    //   stream2: --------a--------b--------c--|-->
    //    merged: ----1---a2----3--b-4----5-c--|-->

// zip two observable streams
const stream1 = emitOverInterval([1,2,3], 500);
const stream2 = emitOverInterval(['a','b','c'], 900);
stream1
    .zip(stream2, (one, two) => { return `{ one: ${one}, two: ${two} }`; })
    .subscribe(
        value => console.log( value )
    );

stream2.subscribe( v => console.log(v) );

    //   stream1: ----1----2----3--------------|-->
    //   stream2: --------a--------b--------c--|-->
    //    zipped: --------1a-------2b-------3c-|-->
